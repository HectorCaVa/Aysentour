import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BookPackagePage } from '../book-package/book-package.page';
import { Router } from '@angular/router';
import { PACKAGES, Packages } from '../data/packages';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.page.html',
  styleUrls: ['./packages.page.scss'],
})
export class PackagesPage implements OnInit {

  packages: Packages[] = PACKAGES;

  constructor(private modalCtrl: ModalController, private router: Router) { }

  ngOnInit() { }

  async openBookingModal(pkg: Packages) {
    const modal = await this.modalCtrl.create({
      component: BookPackagePage,
      componentProps: {
        id: pkg.id,
        availableDates: pkg.availableDates
      }
    });
    return await modal.present();
  }
}
