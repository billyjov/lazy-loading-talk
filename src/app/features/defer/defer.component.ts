import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeferChild1Component } from './defer-child-1/defer-child-1.component';
import { RemoveCommaPipe } from './remove-comma.pipe';
import { DeferChild2Component } from './defer-child-2/defer-child-2.component';

@Component({
  selector: 'app-defer',
  standalone: true,
  imports: [
    CommonModule,
    DeferChild1Component,
    RemoveCommaPipe,
    DeferChild2Component,
  ],
  templateUrl: './defer.component.html',
  styleUrl: './defer.component.css',
})
export class DeferComponent {
  public isVisible = false;

  public toggleVisibility(): void {
    this.isVisible = true;
  }
}
