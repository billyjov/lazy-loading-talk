import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferChild2Component } from './defer-child-2.component';

describe('DeferChild2Component', () => {
  let component: DeferChild2Component;
  let fixture: ComponentFixture<DeferChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferChild2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeferChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
