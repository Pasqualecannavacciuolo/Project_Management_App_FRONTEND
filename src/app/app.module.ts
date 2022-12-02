import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FindUserComponent } from './components/user/find-user/find-user.component';
import { Pm3Component } from './components/pm3/pm3.component';
import { AddPm3Component } from './components/pm3/add-pm3/add-pm3.component';
import { FindPm3Component } from './components/pm3/find-pm3/find-pm3.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddUserComponent,
    FindUserComponent,
    Pm3Component,
    AddPm3Component,
    FindPm3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
