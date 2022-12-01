import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPm3Component } from './components/pm3/add-pm3/add-pm3.component';
import { FindPm3Component } from './components/pm3/find-pm3/find-pm3.component';
import { Pm3Component } from './components/pm3/pm3.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { FindUserComponent } from './components/user/find-user/find-user.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {
    path: 'panoramica-operatori',
    component: UserComponent
  },
  {
    path: 'add-operatore',
    component: AddUserComponent
  },
  {
    path: 'find-operatore',
    component: FindUserComponent
  },
  {
    path: 'panoramica-pm3',
    component: Pm3Component
  },
  {
    path: 'add-pm3',
    component: AddPm3Component
  },
  {
    path: 'find-pm3',
    component: FindPm3Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
