import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardAgregarComponent } from './hard-agregar.component';

describe('HardAgregarComponent', () => {
  let component: HardAgregarComponent;
  let fixture: ComponentFixture<HardAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardAgregarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
