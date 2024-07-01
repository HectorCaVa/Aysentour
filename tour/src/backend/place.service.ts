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
}