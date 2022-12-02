import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindByIdFormComponent } from './find-by-id-form.component';

describe('FindByIdFormComponent', () => {
  let component: FindByIdFormComponent;
  let fixture: ComponentFixture<FindByIdFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindByIdFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindByIdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
