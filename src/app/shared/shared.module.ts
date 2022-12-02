import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { SharedRoutingModule } from './shared-routing.module';
import { ShowPeopleTableComponent } from './components/show-people-table/show-people-table.component';


@NgModule({
  declarations: [
    ShowPeopleTableComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NgxPaginationModule
  ],
  exports: [
    ShowPeopleTableComponent
  ]
})
export class SharedModule { }
