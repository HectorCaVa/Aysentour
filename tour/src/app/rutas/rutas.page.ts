import { Component, OnInit } from '@angular/core';
import { RutasService } from 'src/backend/rutas.service'; // Ajusta la ruta según tu estructura de proyecto

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.page.html',
  styleUrls: ['./rutas.page.scss'],
})
export class RutasPage implements OnInit {

  rutas: any[] = [];

  constructor(private rutasService: RutasService) { }

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
      'Ruta 1': 'assets/img/bus.png',
      // Agrega más rutas según sea necesario
    };
    console.log(`Imagen para ${rutaName}: ${nameMap[rutaName] || 'assets/default-image.jpg'}`);
    return nameMap[rutaName] || 'assets/default-image.jpg';
  }
}
