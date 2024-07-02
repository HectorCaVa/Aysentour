import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { PackageService } from 'src/backend/package.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LogicaLogin } from 'src/backend/logica-login';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  packageId: string | null = null;
  packageDetails: any = {};
  numPersons: number = 1;
  startDate: string = '';
  endDate: string = '';
  userName: string | null = null;
  personOptions: number[] = [];
  minEndDate: string = '';

  constructor(
    private alertController: AlertController,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private packageService: PackageService,
    private logicaLogin: LogicaLogin
  ) { }

  ngOnInit() {
    this.userName = localStorage.getItem('username');
    this.activatedRoute.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.packageId = id;
        this.loadPackageDetails();
      } else {
        console.error('Package ID is null');
      }
    });
  }

  async loadPackageDetails() {
    if (this.packageId) {
      try {
        this.packageDetails = await this.packageService.getPackageById(this.packageId);
        this.personOptions = Array.from({ length: this.packageDetails.cantPersonMax }, (_, i) => i + 1);
        this.startDate = this.packageDetails.fechaIni; // Inicializar con la fecha inicial por defecto
        this.endDate = ''; // Limpiar endDate al cargar nuevos detalles del paquete
        this.minEndDate = this.getMinimumEndDate(); // Calcular la fecha mínima permitida para endDate
      } catch (error) {
        console.error('Error loading package details', error);
      }
    } else {
      console.error('Package ID is null, cannot load package details');
    }
  }

  async reservePackage() {
    try {
      if (!this.startDate || !this.endDate || new Date(this.startDate) >= new Date(this.endDate)) {
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Por favor selecciona fechas válidas.',
          buttons: ['OK'],
        });
        await alert.present();
        return;
      }

      const reservationData = {
        packageId: this.packageId,
        username: this.logicaLogin.getAuthenticatedUsername(),
        startDate: this.startDate,
        endDate: this.endDate,
        numberOfPeople: this.numPersons,
        totalPrice: this.packageDetails.price * this.numPersons,
      };

      const reservationId = await this.packageService.postReservation(reservationData);

      const alert = await this.alertController.create({
        header: 'Reserva Exitosa',
        message: '¡Tu reserva se ha realizado con éxito!',
        buttons: [
          {
            text: 'OK',
            handler: () => {
              alert.dismiss().then(() => {
                this.router.navigate(['/reservation-details', this.userName]);
              });
              return false;
            },
          },
        ],
      });

      await alert.present();
    } catch (error) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Hubo un error al realizar la reserva. Por favor, inténtalo de nuevo más tarde.',
        buttons: ['OK'],
      });

      await alert.present();
    }
  }

  // Método para actualizar endDate cuando cambia startDate
  updateEndDate(event: CustomEvent) {
    const selectedDate = new Date(event.detail.value);
    // Establecer min en endDate como el día siguiente a startDate
    const nextDay = new Date(selectedDate);
    nextDay.setDate(nextDay.getDate() + 1);
    this.endDate = nextDay.toISOString(); // Ajustar el formato según sea necesario
    this.minEndDate = this.endDate; // Actualizar la fecha mínima permitida para endDate
  }

  // Método para calcular la fecha mínima permitida para endDate
  getMinimumEndDate(): string {
    if (this.startDate) {
      const start = new Date(this.startDate);
      const nextDay = new Date(start);
      nextDay.setDate(nextDay.getDate() + 1);
      return nextDay.toISOString();
    }
    return '';
  }
}
