import { Component, OnInit } from '@angular/core';
// importamos los datos de los paquetes turisticos
import { PACKAGES, Packages } from '../data/packages';
import { ModalController } from '@ionic/angular';
import { BookPackagePage } from '../book-package/book-package.page';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.page.html',
  styleUrls: ['./packages.page.scss'],
})
export class PackagesPage implements OnInit {

  packages: Packages[] = PACKAGES; // Asignamos paquetes turisticos

  // servicio proporcionado por Ionic que nos permite crear y controlar ventanas modales
  constructor(private modalController: ModalController) { }

  async openBookingModal(pkg: Packages) {
    const modal = await this.modalController.create({
      component: BookPackagePage,
      componentProps: {
        id: pkg.id, // Pasamos el ID del paquete
        availableDates: pkg.availableDates // Pasamos las fechas disponibles
      }
    });
    return await modal.present();
  }


  ngOnInit() {
  }

  // Agregar más métodos según sea necesario
}
