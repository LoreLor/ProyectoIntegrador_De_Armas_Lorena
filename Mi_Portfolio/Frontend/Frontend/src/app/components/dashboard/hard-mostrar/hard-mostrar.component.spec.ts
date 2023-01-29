import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardMostrarComponent } from './hard-mostrar.component';

describe('HardMostrarComponent', () => {
  let component: HardMostrarComponent;
  let fixture: ComponentFixture<HardMostrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardMostrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
