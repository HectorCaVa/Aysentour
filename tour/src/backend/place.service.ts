import { Injectable } from '@angular/core';
import { getDatabase, ref, child, get } from 'firebase/database';
import { app } from '../backend/firebase-config';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  private db = getDatabase(app);

  constructor() { }

  // Metodo para listar todo
  
  async getPlaces() {
    const dbRef = ref(this.db);
    const snapshot = await get(child(dbRef, 'actividades/categorias'));
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      throw new Error('No data available');
    }
  }

  async getPlacesByCategory(category: string): Promise<any[]> {
    const placesRef = ref(this.db, `actividades/categorias/${category}`);
    try {
      const snapshot = await get(placesRef);
      if (snapshot.exists()) {
        return Object.values(snapshot.val());
      } else {
        return [];
      }
    } catch (error) {
      console.error('Error al obtener lugares por categoría:', error);
      return [];
    }
  }


  // Porque pone paquetes si los lugares estan en actividades?
  async searchPlaces(query: string): Promise<any[]> {
    const placesRef = ref(this.db, 'paquetes');
    try {
      const snapshot = await get(placesRef);
      if (snapshot.exists()) {
        const placesData = Object.values(snapshot.val());
        const places = placesData.reduce((acc: any[], category: any) => {
          return acc.concat(Object.values(category));
        }, []);

        return places.filter((place: any) =>
          place.name.toLowerCase().includes(query.toLowerCase())
        );
      } else {
        return [];
      }
    } catch (error) {
      console.error('Error al buscar lugares:', error);
      return [];
    }
  }

  async getMuseos(): Promise<any[]> {
    const museosRef = ref(this.db, 'actividades/museos');
    try {
      const snapshot = await get(museosRef);
      if (snapshot.exists()) {
        return Object.values(snapshot.val());
      } else {
        return [];
      }
    } catch (error) {
      console.error('Error al obtener museos:', error);
      return [];
    }
  }

  async getParques(): Promise<any[]> {
    const parquesRef = ref(this.db, 'actividades/parques');
    try {
      const snapshot = await get(parquesRef);
      if (snapshot.exists()) {
        return Object.values(snapshot.val());
      } else {
        return [];
      }
    } catch (error) {
      console.error('Error al obtener parques:', error);
      return [];
    }
  }

  async getRestaurantes(): Promise<any[]> {
    const restaurantesRef = ref(this.db, 'actividades/restaurantes');
    try {
      const snapshot = await get(restaurantesRef);
      if (snapshot.exists()) {
        return Object.values(snapshot.val());
      } else {
        return [];
      }
    } catch (error) {
      console.error('Error al obtener restaurantes:', error);
      return [];
    }
  }
}