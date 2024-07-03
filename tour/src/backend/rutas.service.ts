import { Injectable } from '@angular/core';
import { getDatabase, ref, get } from 'firebase/database';
import { app } from 'src/backend/firebase-config'; // Asegúrate de ajustar esta ruta a tu archivo de configuración de Firebase

@Injectable({
  providedIn: 'root'
})
export class RutasService {

  constructor() { }

  async getAllRutas() {
    const db = getDatabase(app);
    const rutasRef = ref(db, 'rutas');
    const snapshot = await get(rutasRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      return Object.keys(data).map(key => ({ id: key, ...data[key] }));
    } else {
      throw new Error('No se encontraron rutas');
    }
  }
}
