import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaDeEditarComponent } from './acerca-de-editar.component';

describe('AcercaDeEditarComponent', () => {
  let component: AcercaDeEditarComponent;
  let fixture: ComponentFixture<AcercaDeEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercaDeEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcercaDeEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
