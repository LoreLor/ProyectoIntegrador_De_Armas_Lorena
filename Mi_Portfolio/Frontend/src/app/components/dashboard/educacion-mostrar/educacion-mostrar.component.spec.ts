import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionMostrarComponent } from './educacion-mostrar.component';

describe('EducacionMostrarComponent', () => {
  let component: EducacionMostrarComponent;
  let fixture: ComponentFixture<EducacionMostrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionMostrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducacionMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
