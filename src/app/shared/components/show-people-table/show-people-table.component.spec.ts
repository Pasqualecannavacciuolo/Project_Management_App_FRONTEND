import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPeopleTableComponent } from './show-people-table.component';

describe('ShowPeopleTableComponent', () => {
  let component: ShowPeopleTableComponent;
  let fixture: ComponentFixture<ShowPeopleTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPeopleTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowPeopleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
