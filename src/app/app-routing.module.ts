import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { HomeUsersComponent } from './components/user/home-users/home-users.component';
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
    path: 'operatori',
    component: UserComponent,
    children: [
      {
        path: '',
        component: HomeUsersComponent,
        outlet: 'operatore_outlet'
      },
      {
        path: 'add-user',
        component: AddUserComponent,
        outlet: 'operatore_outlet'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
