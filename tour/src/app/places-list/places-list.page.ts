import { Component, OnInit } from '@angular/core';
import { PlaceService } from 'src/backend/place.service'; // Ajusta la ruta según tu estructura de proyecto

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.page.html',
  styleUrls: ['./places-list.page.scss'],
})
export class PlacesListPage implements OnInit {
  places: any[] = [];
  categories: string[] = ['museos', 'parques', 'restaurantes'];

  selectedCategory: string = '';

  constructor(private placeService: PlaceService) { }

  ngOnInit() {
    this.getAllPlaces();
  }

  async getAllPlaces() {
    try {
      const placesData = await this.placeService.getPlaces();
      console.log('Datos de todos los lugares:', placesData); // Verifica si los datos se están recuperando correctamente
      this.places = Object.values(placesData).flatMap((category: any) => Object.values(category));
      console.log('Lugares después de obtener todos:', this.places); // Verifica los lugares después de obtener todos
    } catch (error) {
      console.error('Error al obtener todos los lugares:', error);
    }
  }

  async getPlacesByCategory(category: string) {
    try {
      console.log(`Filtrando lugares por categoría: ${category}`);
      const filteredPlaces = await this.placeService.getPlacesByCategory(category);
      console.log(`Lugares filtrados por categoría '${category}':`, filteredPlaces); // Verificar los lugares filtrados en la consola
      this.places = filteredPlaces;
    } catch (error) {
      console.error(`Error al obtener lugares por categoría '${category}':`, error);
      this.places = []; // Asignar un arreglo vacío en caso de error para evitar problemas de visualización
    }
  }

  async resetFilter() {
    await this.getAllPlaces();
    this.selectedCategory = '';
  }
}
