import { Component, OnInit } from '@angular/core';
import { PlaceService } from 'src/backend/place.service';

@Component({
  selector: 'app-general-search',
  templateUrl: './general-search.page.html',
  styleUrls: ['./general-search.page.scss'],
})
export class GeneralSearchPage implements OnInit {

  searchQuery: string ='';
  places: any[] = [];

  constructor(private placeService: PlaceService) { }

  ngOnInit() {
    // Ejemplo de uso al inicio de la página
    this.searchQuery = ''; // Ejemplo: nombre de lugar a buscar
    this.searchPlaces();
  }

  async searchPlaces() {
    this.places = await this.placeService.searchPlaces(this.searchQuery);
  }

  async onSearch() {
    // Lógica que deseas ejecutar cuando se realiza una búsqueda
    await this.searchPlaces();
  }
}