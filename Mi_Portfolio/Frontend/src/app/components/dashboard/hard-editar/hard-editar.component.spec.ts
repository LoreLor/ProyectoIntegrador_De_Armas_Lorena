import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardEditarComponent } from './hard-editar.component';

describe('HardEditarComponent', () => {
  let component: HardEditarComponent;
  let fixture: ComponentFixture<HardEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
