// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule } from '@angular/forms'; // Importa FormsModule si es necesario

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RutaModalComponent } from './ruta-modal/ruta-modal.component'; // Importa el componente modal

@NgModule({
  declarations: [
    AppComponent,
    RutaModalComponent // Declara el componente modal aquí
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule // Añade FormsModule si es necesario para usar ngModel u otras directivas de formularios
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }