import { Component, OnInit } from '@angular/core';
import { RutasService } from 'src/backend/rutas.service'; // Ajusta la ruta según tu estructura de proyecto
import { RutaModalComponent } from '../ruta-modal/ruta-modal.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.page.html',
  styleUrls: ['./rutas.page.scss'],
})
export class RutasPage implements OnInit {

  rutas: any[] = [];

  constructor(private rutasService: RutasService, private modalController: ModalController) { }

  ngOnInit() {
    this.getAllRutas();
  }

  async getAllRutas() {
    try {
      const rutasData = await this.rutasService.getAllRutas();
      this.rutas = rutasData;
      console.log('Rutas obtenidas:', this.rutas); // Verifica si los datos se están recuperando correctamente
    } catch (error) {
      console.error('Error al obtener rutas:', error);
    }
  }

  getImagePath(rutaName: string): string {
    const nameMap: { [key: string]: string } = {
      'Ruta 1': 'assets/img/ruta1.png',
      'Ruta 2': 'assets/img/ruta2.png',
      'Ruta 3': 'assets/img/ruta3.png',
      'Ruta 4': 'assets/img/ruta4.png',
      // Agrega más rutas según sea necesario
    };
    console.log(`Imagen para ${rutaName}: ${nameMap[rutaName] || 'assets/default-image.jpg'}`);
    return nameMap[rutaName] || 'assets/default-image.jpg';
  }

  async openRutaModal(ruta: any) {
    const modal = await this.modalController.create({
      component: RutaModalComponent,
      componentProps: {
        rutaImageUrl: this.getImagePath(ruta.nombre) // Pasa la URL según la ruta seleccionada
      }
    });
    await modal.present();
  }
}
