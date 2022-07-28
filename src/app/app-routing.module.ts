import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { BooksComponent } from './features/books/books.component';
import { HomeComponent } from './features/home/home.component';

const routes: Route[] = [
  {
    path: 'books',
    component: BooksComponent
    /**
     * 🚀 HINT: Lazy load module to avoid big chunks
     */
    // loadChildren: () =>
    //   import('./features/books/books.module').then((m) => m.BooksModule),
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
