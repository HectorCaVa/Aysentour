import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-book-package',
  templateUrl: './book-package.page.html',
  styleUrls: ['./book-package.page.scss'],
})
export class BookPackagePage implements OnInit {
  startDateTime: string = ''; // Inicializamos la propiedad startDateTime
  packageId: number = 0; // Inicializamos la propiedad packageId
  availableDates: string[] = [];
  todayISOString: string = new Date().toISOString();

  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.packageId = this.navParams.get('id') || 0;
    this.availableDates = this.navParams.get('availableDates') || [];
    this.setInitialDate();
  }

  async dismiss() {
    this.modalCtrl.dismiss();
  }

  async confirmBooking() {
    const selectedDate = new Date(this.startDateTime).toISOString().split('T')[0];
    if (!this.availableDates.includes(selectedDate)) {
      this.showDateErrorToast();
      return;
    }

    // Lógica de confirmación de reserva
    console.log('Reservando paquete con ID:', this.packageId, 'y fecha y hora de inicio:', this.startDateTime);
    this.dismiss();
    const toast = await this.toastController.create({
      message: 'Tu reserva ha sido confirmada.',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

  async showDateErrorToast() {
    const toast = await this.toastController.create({
      message: 'Esta fecha no está disponible. Por favor, elige otra fecha.',
      duration: 2000,
      color: 'danger'
    });
    toast.present();
  }

  setInitialDate() {
    const today = new Date().toISOString().split('T')[0];
    this.startDateTime = this.availableDates.includes(today) ? today : this.availableDates[0] || '';
  }

  getMinimumDate() {
    return this.availableDates.length > 0 ? this.availableDates[0] : this.todayISOString;
  }

  getMaximumDate() {
    return this.availableDates.length > 0 ? this.availableDates[this.availableDates.length - 1] :
      new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString();
  }
}