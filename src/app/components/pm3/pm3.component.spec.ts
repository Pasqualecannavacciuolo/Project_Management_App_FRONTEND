import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pm3Component } from './pm3.component';

describe('Pm3Component', () => {
  let component: Pm3Component;
  let fixture: ComponentFixture<Pm3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pm3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pm3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
