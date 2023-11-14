import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserverChildComponent } from './observer-child.component';

describe('ObserverChildComponent', () => {
  let component: ObserverChildComponent;
  let fixture: ComponentFixture<ObserverChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ObserverChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObserverChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
