import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferChild1Component } from './defer-child-1.component';

describe('DeferChild1Component', () => {
  let component: DeferChild1Component;
  let fixture: ComponentFixture<DeferChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferChild1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeferChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
