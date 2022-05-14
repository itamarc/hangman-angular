import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmControlsComponent } from './hm-controls.component';

describe('HmControlsComponent', () => {
  let component: HmControlsComponent;
  let fixture: ComponentFixture<HmControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HmControlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HmControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
