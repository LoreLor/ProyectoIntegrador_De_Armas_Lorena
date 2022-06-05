import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftMostrarComponent } from './soft-mostrar.component';

describe('SoftMostrarComponent', () => {
  let component: SoftMostrarComponent;
  let fixture: ComponentFixture<SoftMostrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftMostrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
