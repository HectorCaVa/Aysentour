import { getDatabase, ref, set } from 'firebase/database';
import { app } from 'src/backend/firebase-config';
import { AlertController } from '@ionic/angular';

export class RegistroService {
  constructor(private alertController: AlertController) { }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async register(username: string, email: string, password: string, confirmPassword: string) {
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    const passwordRegex = /^[a-zA-Z0-9!@#$%^&*()_+-=]+$/; 

    if (!usernameRegex.test(username)) {
      this.presentAlert('Error', 'El nombre de usuario no puede contener caracteres especiales');
      return;
    }

    if (!passwordRegex.test(password)) {
      this.presentAlert('Error', 'La contraseña no cumple con los requisitos de complejidad');
      return;
    }

    if (password.length < 5) {
      this.presentAlert('Error', 'La contraseña debe tener al menos 5 caracteres');
      return;
    }

    if (password !== confirmPassword) {
      this.presentAlert('Error', 'Las contraseñas no coinciden');
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailRegex.test(email)) {
      this.presentAlert('Error', 'El correo electrónico debe ser válido y tener el dominio "@gmail.com"');
      return;
    }

    const db = getDatabase(app);
    const usernameWithoutQuotes = username.replace(/['"]/g, '');
    const userData = {
      username: usernameWithoutQuotes,
      email: email,
      password: password
    };

    const newUserRef = ref(db, 'users/' + usernameWithoutQuotes);

    set(newUserRef, userData)
      .then(() => {
        this.presentAlert('Éxito', 'Datos del usuario registrados con éxito');
      })
      .catch((error) => {
        this.presentAlert('Error', 'Error al registrar datos del usuario: ' + error);
      });
  }
}
