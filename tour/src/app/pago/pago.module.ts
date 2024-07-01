import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PagoPageRoutingModule } from './pago-routing.module';
import { PagoPage } from './pago.page';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagoPageRoutingModule,
    HttpClientModule // Añade HttpClientModule aquí también
  ],
  declarations: [PagoPage]
})
export class PagoPageModule {}

