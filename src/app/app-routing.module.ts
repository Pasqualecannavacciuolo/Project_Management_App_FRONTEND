import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { FindUserComponent } from './components/user/find-user/find-user.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
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
