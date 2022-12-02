import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { SharedRoutingModule } from './shared-routing.module';
import { ShowPeopleTableComponent } from './components/show-people-table/show-people-table.component';
import { AddFormComponent } from './components/add-form/add-form.component';
import { FindByIdFormComponent } from './components/find-by-id-form/find-by-id-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ShowPeopleTableComponent,
    AddFormComponent,
    FindByIdFormComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ShowPeopleTableComponent,
    AddFormComponent,
    FindByIdFormComponent
  ]
})
export class SharedModule { }
