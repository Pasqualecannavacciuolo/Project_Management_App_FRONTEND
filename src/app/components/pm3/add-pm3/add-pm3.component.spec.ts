import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPm3Component } from './add-pm3.component';

describe('AddPm3Component', () => {
  let component: AddPm3Component;
  let fixture: ComponentFixture<AddPm3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPm3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPm3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
