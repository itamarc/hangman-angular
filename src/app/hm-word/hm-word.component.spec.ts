import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmWordComponent } from './hm-word.component';

describe('HmWordComponent', () => {
  let component: HmWordComponent;
  let fixture: ComponentFixture<HmWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HmWordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HmWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
