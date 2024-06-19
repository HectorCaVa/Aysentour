import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneralSearchPageRoutingModule } from './general-search-routing.module';

import { GeneralSearchPage } from './general-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneralSearchPageRoutingModule
  ],
  declarations: [GeneralSearchPage]
})
export class GeneralSearchPageModule {}
