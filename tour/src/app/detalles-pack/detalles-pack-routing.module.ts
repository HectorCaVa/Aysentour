import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesPackPage } from './detalles-pack.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesPackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesPackPageRoutingModule {}
