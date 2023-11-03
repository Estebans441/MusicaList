import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/auth/login/login.component";
import {SignupComponent} from "./components/auth/signup/signup.component";
import {MainAdminComponent} from "./components/admin/main/main-admin.component";
import {MainVotComponent} from "./components/vot/main/main-vot.component";
import {AdminGenresComponent} from "./components/admin/genre/genres/admin-genres.component";
import {AdminAccountComponent} from "./components/admin/account/admin-account.component";
import {AdminSongsComponent} from "./components/admin/song/songs/admin-songs.component";
import {VotGenresComponent} from "./components/vot/genres/vot-genres.component";
import {VotSongsComponent} from "./components/vot/songs/vot-songs.component";
import {VotVotesComponent} from "./components/vot/votes/vot-votes.component";
import {VotAccountComponent} from "./components/vot/account/vot-account.component";

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
