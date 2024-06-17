import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'package',
    loadChildren: () => import('./package/package.module').then(m => m.PackagePageModule)
  },

  {
    path: 'book-package',
    loadChildren: () => import('./book-package/book-package.module').then(m => m.BookPackagePageModule)
  },
  {
    path: 'details/:id', // Ruta con parámetro id
    loadChildren: () => import('./details/details.module').then(m => m.DetailsPageModule)
  },
  {
    path: 'reservation-details/:username',
    loadChildren: () => import('./reservation-details/reservation-details.module').then(m => m.ReservationDetailsPageModule)
  },

  {
<<<<<<< HEAD
    path: 'category-search',
    loadChildren: () => import('./category-search/category-search.module').then(m => m.CategorySearchPageModule)
  },
  {
    path: 'general-search',
    loadChildren: () => import('./general-search/general-search.module').then(m => m.GeneralSearchPageModule)
=======
    path: 'actividades',
    loadChildren: () => import('./actividades/actividades.module').then( m => m.ActividadesPageModule)
>>>>>>> 804543df5f97f87ff2fd2468aea3b2fc346cde49
  },
  {
    path: 'places-list',
    loadChildren: () => import('./places-list/places-list.module').then(m => m.PlacesListPageModule)
  },




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }