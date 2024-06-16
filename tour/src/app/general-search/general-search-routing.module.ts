import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneralSearchPage } from './general-search.page';

const routes: Routes = [
  {
    path: '',
    component: GeneralSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralSearchPageRoutingModule {}
