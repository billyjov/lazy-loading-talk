import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BooksComponent } from './books.component';

@NgModule({
  declarations: [BooksComponent],
  imports: [
    CommonModule,
    /**
     * 🚀 HINT: Lazy load the NgOptimizedImage standalone module.
     */
    // NgOptimizedImage,

    /**
     * 🚀 HINT: Fallback route to enable lazy loaded chunks.
     */
    RouterModule.forChild([
      {
        path: '',
        component: BooksComponent,
      },
    ]),
  ],
})
export class BooksModule {}
