import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./auth-components/login/login.component";
import {SignupComponent} from "./auth-components/signup/signup.component";
import {MainAdminComponent} from "./admin-components/main-admin/main-admin.component";
import {MainVotComponent} from "./vot-components/main-vot/main-vot.component";
import {AdminGenresComponent} from "./admin-components/admin-genres/admin-genres.component";
import {AdminAccountComponent} from "./admin-components/admin-account/admin-account.component";
import {AdminSongsComponent} from "./admin-components/admin-songs/admin-songs.component";
import {VotGenresComponent} from "./vot-components/vot-genres/vot-genres.component";
import {VotSongsComponent} from "./vot-components/vot-songs/vot-songs.component";
import {VotVotesComponent} from "./vot-components/vot-votes/vot-votes.component";
import {VotAccountComponent} from "./vot-components/vot-account/vot-account.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {
    path: 'admin', component: MainAdminComponent,
    children: [
      {path: 'genres', component: AdminGenresComponent},
      {path: 'genre/:id', component: AdminSongsComponent},
      {path: 'account', component: AdminAccountComponent},
      {path: '', redirectTo: 'genres', pathMatch: 'full'}
    ]
  },
  {
    path: 'vot', component: MainVotComponent,
    children: [
      {path: 'genres', component: VotGenresComponent},
      {path: 'genre/:id', component: VotSongsComponent},
      {path: 'account', component: VotAccountComponent},
      {path: 'votes', component: VotVotesComponent},
      {path: '', redirectTo: 'genres', pathMatch: 'full'}
    ]
  },
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
