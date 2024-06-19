import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookPackagePage } from './book-package.page';

const routes: Routes = [
  {
    path: '',
    component: BookPackagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookPackagePageRoutingModule {}
