import { Component, OnInit } from '@angular/core';
import { PlaceService } from 'src/backend/place.service';

@Component({
  selector: 'app-category-search',
  templateUrl: './category-search.page.html',
  styleUrls: ['./category-search.page.scss'],
})
export class CategorySearchPage implements OnInit {

  selectedCategory: string ='';
  places: any[] = [];

  constructor(private placeService: PlaceService) { }

  ngOnInit() {
    // Ejemplo de uso al inicio de la página
    this.selectedCategory = 'restaurant'; // Ejemplo: restaurante, museo, parque, etc.
    this.getPlaces();
  }

  async getPlaces() {
    this.places = await this.placeService.getPlacesByCategory(this.selectedCategory);
  }

  async onCategoryChange() {
    // Lógica que deseas ejecutar cuando cambia la categoría
    await this.getPlaces();
  }
}