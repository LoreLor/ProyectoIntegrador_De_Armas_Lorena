import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaDeAgregarComponent } from './acerca-de-agregar.component';

describe('AcercaDeAgregarComponent', () => {
  let component: AcercaDeAgregarComponent;
  let fixture: ComponentFixture<AcercaDeAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercaDeAgregarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcercaDeAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
