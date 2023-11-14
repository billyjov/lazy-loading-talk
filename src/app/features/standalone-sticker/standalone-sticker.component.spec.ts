import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneStickerComponent } from './standalone-sticker.component';

describe('StandaloneStickerComponent', () => {
  let component: StandaloneStickerComponent;
  let fixture: ComponentFixture<StandaloneStickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ StandaloneStickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandaloneStickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
