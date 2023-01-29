import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosAgregarComponent } from './proyectos-agregar.component';

describe('ProyectosAgregarComponent', () => {
  let component: ProyectosAgregarComponent;
  let fixture: ComponentFixture<ProyectosAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosAgregarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectosAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
