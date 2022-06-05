import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionEliminarComponent } from './educacion-eliminar.component';

describe('EducacionEliminarComponent', () => {
  let component: EducacionEliminarComponent;
  let fixture: ComponentFixture<EducacionEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionEliminarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducacionEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
