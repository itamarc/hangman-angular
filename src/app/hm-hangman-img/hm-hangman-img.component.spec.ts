import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmHangmanImgComponent } from './hm-hangman-img.component';

describe('HmHangmanImgComponent', () => {
  let component: HmHangmanImgComponent;
  let fixture: ComponentFixture<HmHangmanImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HmHangmanImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HmHangmanImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
