import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosEliminarComponent } from './proyectos-eliminar.component';

describe('ProyectosEliminarComponent', () => {
  let component: ProyectosEliminarComponent;
  let fixture: ComponentFixture<ProyectosEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosEliminarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectosEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
