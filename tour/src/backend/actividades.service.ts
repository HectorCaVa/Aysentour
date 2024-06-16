// actividades.service.ts
import { Injectable } from '@angular/core';
import { getDatabase, ref, get, child } from 'firebase/database';
import { app } from './firebase-config'; // Importa tu configuración de Firebase

@Injectable({
  providedIn: 'root',
})
export class ActividadesService {
  private db = getDatabase(app);

  constructor() {}

  async getAllActividades(): Promise<any> {
    const dbRef = ref(this.db);
    const snapshot = await get(child(dbRef, 'actividades/categorias'));
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return {};
    }
  }
}