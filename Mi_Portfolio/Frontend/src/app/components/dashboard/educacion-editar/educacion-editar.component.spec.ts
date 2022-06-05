import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionEditarComponent } from './educacion-editar.component';

describe('EducacionEditarComponent', () => {
  let component: EducacionEditarComponent;
  let fixture: ComponentFixture<EducacionEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducacionEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
