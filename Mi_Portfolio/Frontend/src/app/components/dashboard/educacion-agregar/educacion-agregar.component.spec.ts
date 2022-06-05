import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionAgregarComponent } from './educacion-agregar.component';

describe('EducacionAgregarComponent', () => {
  let component: EducacionAgregarComponent;
  let fixture: ComponentFixture<EducacionAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionAgregarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducacionAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
