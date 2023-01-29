import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaEditarComponent } from './experiencia-editar.component';

describe('ExperienciaEditarComponent', () => {
  let component: ExperienciaEditarComponent;
  let fixture: ComponentFixture<ExperienciaEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienciaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
