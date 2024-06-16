// package.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PackagePageRoutingModule } from './package-routing.module';
import { PackagesPage } from './package.page'; // Importa el componente correcto

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PackagePageRoutingModule
  ],
  declarations: [PackagesPage] // Declara el componente correcto
})
export class PackagePageModule {}
