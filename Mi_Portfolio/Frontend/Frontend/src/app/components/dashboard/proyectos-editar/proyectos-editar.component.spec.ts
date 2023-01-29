import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosEditarComponent } from './proyectos-editar.component';

describe('ProyectosEditarComponent', () => {
  let component: ProyectosEditarComponent;
  let fixture: ComponentFixture<ProyectosEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectosEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
