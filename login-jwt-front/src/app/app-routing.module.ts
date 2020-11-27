import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DataUserComponent } from './components/data-user/data-user.component';
import {UserIsNotLoggedIn} from './services/auth-guard.service'
import {UserIsLoggedIn} from './services/auth-guard.service'





const routes: Routes = [
  { path:'',
  redirectTo:'login',
  pathMatch: 'full'
  },
  {path:'login',component: LoginComponent,canActivate: [UserIsNotLoggedIn] },
  {path:'home',component: HomeComponent,canActivate: [UserIsLoggedIn]},
  {path:'dataUser',component: DataUserComponent , canActivate: [UserIsLoggedIn]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
