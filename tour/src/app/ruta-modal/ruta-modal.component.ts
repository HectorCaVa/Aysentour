import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ruta-modal',
  templateUrl: './ruta-modal.component.html',
  styleUrls: ['./ruta-modal.component.scss'],
})
export class RutaModalComponent {
  @Input()
  rutaImageUrl!: string; // Declarar la propiedad de entrada

  constructor(private modalController: ModalController) { }

  async closeModal() {
    await this.modalController.dismiss();
  }
}
