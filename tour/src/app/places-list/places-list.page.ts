import { Component, OnInit } from '@angular/core';
import { PlaceService } from 'src/backend/place.service'; // Ajusta la ruta según tu estructura de proyecto
import { Router } from '@angular/router';

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.page.html',
  styleUrls: ['./places-list.page.scss'],
})
export class PlacesListPage implements OnInit {
  places: any[] = [];
  filteredPlaces: any[] = [];
  categories: string[] = ['museos', 'parques', 'restaurantes'];

  selectedCategory: string = '';
  searchTerm: string = '';

  constructor(private placeService: PlaceService,private router: Router) { }

  ngOnInit() {
    this.getAllPlaces();
  }

  async getAllPlaces() {
    try {
      const placesData = await this.placeService.getPlaces();
      console.log('Datos de todos los lugares:', placesData); // Verifica si los datos se están recuperando correctamente
      this.places = Object.values(placesData).flatMap((category: any) => Object.values(category));
      this.filteredPlaces = this.places;
      console.log('Lugares después de obtener todos:', this.places); // Verifica los lugares después de obtener todos
    } catch (error) {
      console.error('Error al obtener todos los lugares:', error);
    }
  }
  async pagar() {
    try {this.router.navigateByUrl('/pago');
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
      this.filteredPlaces = filteredPlaces;
      this.filterPlaces(); // Aplicar el filtro de búsqueda después de filtrar por categoría
    } catch (error) {
      console.error(`Error al obtener lugares por categoría '${category}':`, error);
      this.places = []; // Asignar un arreglo vacío en caso de error para evitar problemas de visualización
      this.filteredPlaces = [];
    }
  }

  async resetFilter() {
    await this.getAllPlaces();
    this.selectedCategory = '';
    this.searchTerm = '';
  }

  filterPlaces() {
    const searchTerm = this.searchTerm.toLowerCase();
    this.filteredPlaces = this.places.filter(place =>
      place.nombre.toLowerCase().includes(searchTerm) ||
      place.ubicacion.toLowerCase().includes(searchTerm)
    );
  }

  getImagePath(placeName: string): string {
    const nameMap: { [key: string]: string } = {
      'Museo Regional de Aysén': 'assets/img/museo1.jpeg',
      'Museo Río Simpson': 'assets/img/museo2.jpg',
      'Parque Nacional Queulat': 'assets/img/parque1.jpeg',
      'Parque Patagonia': 'assets/img/parque2.jpeg',
      'Restaurante A': 'assets/img/restaurante1.jpg',  // Ajusta los nombres aquí si es necesario
      'Restaurante B': 'assets/img/restaurante2.jpeg', // Ajusta los nombres aquí si es necesario
      // Añade más mapeos de nombres a imágenes aquí según sea necesario
    };
    console.log(`Imagen para ${placeName}: ${nameMap[placeName] || 'assets/default-image.jpg'}`); // Agrega esta línea
    return nameMap[placeName] || 'assets/default-image.jpg';
  }
}
