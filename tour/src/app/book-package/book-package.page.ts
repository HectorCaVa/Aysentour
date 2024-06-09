import { Component } from '@angular/core';
import { ModalController, NavParams, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-book-package',
  templateUrl: './book-package.page.html',
  styleUrls: ['./book-package.page.scss'],
})
export class BookPackagePage {
  startDateTime: string = new Date().toISOString();
  packageId: number = 0;
  todayISOString: string = new Date().toISOString();

  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams,
    private toastController: ToastController
  ) {
    this.packageId = this.navParams.get('id');
  }

  async dismiss() {
    this.modalCtrl.dismiss();
  }

  async confirmBooking() {
    if (!this.startDateTime || this.startDateTime === '') {
      const toast = await this.toastController.create({
        message: 'Por favor, selecciona una fecha y hora de inicio.',
        duration: 2000,
        color: 'danger'
      });
      await toast.present();
      return;
    }

    console.log('Reservando paquete con ID:', this.packageId, 'y fecha y hora de inicio:', this.startDateTime);
    // Aquí podrías añadir la llamada a un servicio de reservas

    this.dismiss(); // Cierra el modal después de la reserva

    const toast = await this.toastController.create({
      message: 'Tu reserva ha sido confirmada.',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }
}