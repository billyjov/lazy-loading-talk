import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { SingletonComponent } from './singleton/singleton.component';

@NgModule({
  declarations: [
    HomeComponent,
    SingletonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
