import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.page.html',
  styleUrls: ['./pagar.page.scss'],
})
export class PagarPage implements OnInit {

  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() { }

  async showSuccessMessage() {
    const alert = await this.alertController.create({
      header: 'Éxito',
      message: 'Pago realizado con éxito, proceda a agendar el tour',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.router.navigate(['/details', 'package-id']); // Reemplaza 'package-id' con el ID del paquete real
          }
        }
      ]
    });

    await alert.present();
  }

  onSubmit() {
    this.showSuccessMessage();
  }
}
