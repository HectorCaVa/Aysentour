import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BookPackagePage } from '../book-package/book-package.page';
import { Packages, PACKAGES } from '../data/packages';
import { Router } from '@angular/router'; // Asegúrate de importar Router

@Component({
  selector: 'app-packages',
  templateUrl: './packages.page.html',
  styleUrls: ['./packages.page.scss'],
})
export class PackagesPage implements OnInit {

  packages: Packages[] = PACKAGES; // Usando PACKAGES aquí

  constructor(private modalCtrl: ModalController, private router: Router) { }

  ngOnInit() { }

  async openBookingModal(pkg: Packages) {
    const modal = await this.modalCtrl.create({
      component: BookPackagePage,
      componentProps: {
        packageId: pkg.id,
        availableDates: pkg.availableDates,
        package: pkg
      }
    });
    return await modal.present();
  }

  // Esta función te llevará a la página de detalles del paquete
  goToPackageDetails(packageId: number) {
    this.router.navigate(['/detalles-pack', packageId]);
  }
}
