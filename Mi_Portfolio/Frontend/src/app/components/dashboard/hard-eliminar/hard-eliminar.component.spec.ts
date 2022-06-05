import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardEliminarComponent } from './hard-eliminar.component';

describe('HardEliminarComponent', () => {
  let component: HardEliminarComponent;
  let fixture: ComponentFixture<HardEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardEliminarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
