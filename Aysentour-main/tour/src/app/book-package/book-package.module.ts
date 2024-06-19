import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookPackagePageRoutingModule } from './book-package-routing.module';

import { BookPackagePage } from './book-package.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookPackagePageRoutingModule
  ],
  declarations: [BookPackagePage]
})
export class BookPackagePageModule {}
