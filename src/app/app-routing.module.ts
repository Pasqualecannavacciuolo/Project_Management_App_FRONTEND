import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
