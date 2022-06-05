import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaMostrarComponent } from './experiencia-mostrar.component';

describe('ExperienciaMostrarComponent', () => {
  let component: ExperienciaMostrarComponent;
  let fixture: ComponentFixture<ExperienciaMostrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaMostrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienciaMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
