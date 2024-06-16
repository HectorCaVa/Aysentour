import { Injectable } from '@angular/core';
import { getDatabase, ref, child, get } from 'firebase/database';
import { app } from 'src/backend/firebase-config';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogicaLogin {
  constructor(private alertController: AlertController, private router: Router) { }

  async loginUser(username: string, password: string) {
    const db = getDatabase(app);
    const usersRef = ref(db, 'users');

    get(child(usersRef, username)).then((snapshot) => {
      if (snapshot.exists()) {
        const userData = snapshot.val();
        if (userData.password === password) {
          localStorage.setItem('username', username);
          this.presentAlert('Éxito', 'Inicio de sesión exitoso');
          this.router.navigateByUrl('/package');
        } else {
          this.presentAlert('Error', 'Contraseña incorrecta');
        }
      } else {
        this.presentAlert('Error', 'Usuario no encontrado');
      }
    }).catch((error) => {
      this.presentAlert('Error', 'Error al obtener datos de usuario');
    });
  }

  getAuthenticatedUsername(): string | null {
    return localStorage.getItem('username');
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
