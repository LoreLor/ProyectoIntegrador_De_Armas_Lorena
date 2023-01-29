import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftAgregarComponent } from './soft-agregar.component';

describe('SoftAgregarComponent', () => {
  let component: SoftAgregarComponent;
  let fixture: ComponentFixture<SoftAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftAgregarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
