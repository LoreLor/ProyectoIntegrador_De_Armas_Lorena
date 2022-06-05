import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaDeMostrarComponent } from './acerca-de-mostrar.component';

describe('AcercaDeMostrarComponent', () => {
  let component: AcercaDeMostrarComponent;
  let fixture: ComponentFixture<AcercaDeMostrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercaDeMostrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcercaDeMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
