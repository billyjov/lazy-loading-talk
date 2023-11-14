import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { BooksComponent } from './features/books/books.component';
import { HomeComponent } from './features/home/home.component';

const routes: Route[] = [
  {
    path: 'books',
    // component: BooksComponent
    /**
     * 🚀 HINT: Lazy load module to avoid big chunks
     */
    loadChildren: () =>
      import('./features/books/books.module').then((m) => m.BooksModule),
  },
  // {
  //   path: 'standalone',
  //   loadComponent: () =>
  //     import('./features/standalone-sticker/standalone-sticker.component').then(
  //       m => m.StandaloneStickerComponent
  //     ),
  // },

  /**
   * 🚀 HINT: Use default export to lazy load component or module.
   * @see: https://github.com/angular/angular/pull/47586
   */
  {
    path: 'standalone',
    loadComponent: () =>
      import('./features/standalone-sticker/standalone-sticker.component'),
  },
  {
    path: 'observer',
    loadComponent: () =>
      import('./features/observer/observer.component').then(
        (m) => m.ObserverComponent
      ),
  },
  {
    path: 'defer',
    loadComponent: () =>
      import('./features/defer/defer.component').then(
        (m) => m.DeferComponent
      ),
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
