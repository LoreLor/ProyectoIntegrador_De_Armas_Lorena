import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaAgregarComponent } from './experiencia-agregar.component';

describe('ExperienciaAgregarComponent', () => {
  let component: ExperienciaAgregarComponent;
  let fixture: ComponentFixture<ExperienciaAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaAgregarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienciaAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
