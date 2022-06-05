import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosMostrarComponent } from './proyectos-mostrar.component';

describe('ProyectosMostrarComponent', () => {
  let component: ProyectosMostrarComponent;
  let fixture: ComponentFixture<ProyectosMostrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosMostrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectosMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
