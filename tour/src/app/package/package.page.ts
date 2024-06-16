import { Component, OnInit } from '@angular/core';
// importamos los datos de los paquetes turisticos
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { PackageService } from 'src/backend/package.service';

@Component({
  selector: 'app-package',
  templateUrl: './package.page.html',
  styleUrls: ['./package.page.scss'],
})
export class PackagesPage implements OnInit {
  packages: any[] = []; // Variable para almacenar los paquetes turísticos

  constructor(
    private modalController: ModalController,
    private router: Router, // Inyectamos el servicio del enrutador
    private packageService: PackageService // Inyectamos el servicio de paquetes turísticos
  ) { }


  async ngOnInit() {
    await this.loadPackages();
  }

  async loadPackages() {
    try {
      this.packages = await this.packageService.getPackages();
    } catch (error) {
      console.error('Error loading packages', error);
    }
  }

  // Navegar a la página de detalles
  viewDetails(packageId: string) {
    this.router.navigate(['/details', packageId]);
  }

  // Agregar más métodos según sea necesario
}