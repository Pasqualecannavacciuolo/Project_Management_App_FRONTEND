import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPm3Component } from './find-pm3.component';

describe('FindPm3Component', () => {
  let component: FindPm3Component;
  let fixture: ComponentFixture<FindPm3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindPm3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindPm3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
