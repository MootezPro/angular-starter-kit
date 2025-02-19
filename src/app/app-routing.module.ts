import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { Page404Component } from './page404/page404.component';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component'
const routes: Routes = [
  { path: '', component: HomeComponent },
   { path: 'register', component: RegisterComponent },
   {path : 'login',component: LoginComponent },
   { path: 'profile', component: ProfileComponent },
  { path: '**', component: Page404Component}              
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
