import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaEliminarComponent } from './experiencia-eliminar.component';

describe('ExperienciaEliminarComponent', () => {
  let component: ExperienciaEliminarComponent;
  let fixture: ComponentFixture<ExperienciaEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaEliminarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienciaEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
