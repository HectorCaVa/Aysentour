import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { CapacitorGoogleMaps } = Plugins;

@Component({
  selector: 'app-route-map',
  templateUrl: './route-map.page.html',
  styleUrls: ['./route-map.page.scss'],
})
export class RouteMapPage implements OnInit {
  @ViewChild('map', { static: false }) mapElement!: ElementRef; // Usa '!' para indicar que será inicializado
  private map: any;

  constructor() {}

  ngOnInit() {
    this.loadMap();
  }

  async loadMap() {
    try {
      const position = await CapacitorGoogleMaps['getCurrentPosition'](); // Acceder con ['getCurrentPosition']
      this.map = await CapacitorGoogleMaps['create']({
        camera: {
          target: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
          zoom: 12,
        },
      });

      await this.map.setCameraZoom(12); // Ajuste del zoom del mapa

    } catch (error) {
      console.error('Error initializing map:', error);
    }
  }
}
