import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftEditarComponent } from './soft-editar.component';

describe('SoftEditarComponent', () => {
  let component: SoftEditarComponent;
  let fixture: ComponentFixture<SoftEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
