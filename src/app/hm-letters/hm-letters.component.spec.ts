import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmLettersComponent } from './hm-letters.component';

describe('HmLettersComponent', () => {
  let component: HmLettersComponent;
  let fixture: ComponentFixture<HmLettersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HmLettersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HmLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
