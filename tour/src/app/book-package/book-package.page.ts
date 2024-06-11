import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Packages } from '../data/packages';

@Component({
  selector: 'app-book-package',
  templateUrl: './book-package.page.html',
  styleUrls: ['./book-package.page.scss'],
})
export class BookPackagePage implements OnInit {
  @Input() packageId: number = 0;
  @Input() availableDates: string[] = [];
  @Input() package: Packages | undefined;
  startDateTime: string = '';

  constructor(
    private modalCtrl: ModalController,
    private toastController: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
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

    console.log('Reservando paquete con ID:', this.packageId, 'y fecha y hora de inicio:', this.startDateTime);

    // Actualiza el objeto package con la fecha seleccionada
    if (this.package) {
      this.package.startDate = selectedDate;
    }

    this.dismiss();
    const toast = await this.toastController.create({
      message: 'Tu reserva ha sido confirmada.',
      duration: 2000,
      color: 'success'
    });
    toast.present();

    // Navegar al detalle del paquete con parámetros
    this.router.navigate(['/package-details', this.packageId]);
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
    return this.availableDates.length > 0 ? this.availableDates[0] : '';
  }

  getMaximumDate() {
    return this.availableDates.length > 0 ? this.availableDates[this.availableDates.length - 1] :
      new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString();
  }
}
