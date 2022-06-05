import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftEliminarComponent } from './soft-eliminar.component';

describe('SoftEliminarComponent', () => {
  let component: SoftEliminarComponent;
  let fixture: ComponentFixture<SoftEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftEliminarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
