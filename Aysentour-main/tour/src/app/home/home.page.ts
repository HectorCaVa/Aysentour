
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { RegistroService } from 'src/backend/logica-registro'; // aqui debes de dar la ruta exacta del backend y el servico que creaste ejemplo (logica-registro.ts)
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})


//LOS DATOS A RESCATAR DEBEN DEFINIRSE ES LOS .TS DEL FRONTEND 
export class HomePage {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  registroService: RegistroService;


  //ESTO ES SOLO SON LAS ALERTAS PRETERMINADAS DE IONIC 
  constructor(private alertController: AlertController) {
    this.registroService = new RegistroService(this.alertController);
  }


  //AQUI DEBES LLAMAR TU SERVICIO Y LOS DATOS A USAR 
  register() {
    this.registroService.register(this.username, this.email, this.password, this.confirmPassword);
  }
}
