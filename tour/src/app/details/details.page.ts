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

  constructor(
    private alertController: AlertController,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private packageService: PackageService,
    private logicaLogin: LogicaLogin // Inyecta el servicio LogicaLogin
  ) { }

  ngOnInit() {
    this.userName = localStorage.getItem('username');
    this.activatedRoute.paramMap.subscribe(params => {
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
      } catch (error) {
        console.error('Error loading package details', error);
      }
    } else {
      console.error('Package ID is null, cannot load package details');
    }
  }

  async reservePackage() {
    try {
      const reservationData = {
        packageId: this.packageId,
        username: this.logicaLogin.getAuthenticatedUsername(), // Obtener el nombre de usuario autenticado
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
            }
          }
        ]
      });

      await alert.present();
    } catch (error) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Hubo un error al realizar la reserva. Por favor, inténtalo de nuevo más tarde.',
        buttons: ['OK']
      });

      await alert.present();
    }
  }
}
