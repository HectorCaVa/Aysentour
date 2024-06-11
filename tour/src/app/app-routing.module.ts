import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'packages',
    pathMatch: 'full'
  },
  {
    path: 'packages',
    loadChildren: () => import('./packages/packages.module').then(m => m.PackagesPageModule)
  },
  {
    path: 'book-package',
    loadChildren: () => import('./book-package/book-package.module').then(m => m.BookPackagePageModule)
  },
  {
    path: 'package-details/:id', // La ruta incluye el parámetro id
    loadChildren: () => import('./package-details/package-details.module').then(m => m.PackageDetailsPageModule)
  },
  {
    path: 'detalles-pack/:id',
    loadChildren: () => import('./detalles-pack/detalles-pack.module').then(m => m.DetallesPackPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }