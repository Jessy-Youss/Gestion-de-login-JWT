import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DataUserComponent } from './components/data-user/data-user.component';
import {UserIsNotLogin} from './services/auth-security.service'
import {UserIsLogin} from './services/auth-security.service'





const routes: Routes = [
  { path:'',
  redirectTo:'login',
  pathMatch: 'full'
  },
  {path:'login',component: LoginComponent,canActivate: [UserIsNotLogin] },
  {path:'home',component: HomeComponent,canActivate: [UserIsLogin]},
  {path:'dataUser',component: DataUserComponent , canActivate: [UserIsLogin]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
