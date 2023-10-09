import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {MainAdminComponent} from "./main-admin/main-admin.component";
import {MainVotComponent} from "./main-vot/main-vot.component";
import {AdminGenresComponent} from "./admin-genres/admin-genres.component";
import {AdminAccountComponent} from "./admin-account/admin-account.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'admin', component: MainAdminComponent,
    children: [
      {path: 'genres', component: AdminGenresComponent},
      {path: 'account', component: AdminAccountComponent},
      {path: '', redirectTo:'genres', pathMatch: 'full'}
    ]},
  {path: 'vot', component: MainVotComponent,
    children: [
      {path: 'genres', component: AdminGenresComponent},
      {path: 'account', component: AdminAccountComponent},
      {path: 'votes', component: AdminAccountComponent},
      {path: '', redirectTo:'genres', pathMatch: 'full'}
    ]},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
