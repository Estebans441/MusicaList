import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {MainAdminComponent} from "./main-admin/main-admin.component";
import {MainVotComponent} from "./main-vot/main-vot.component";
import {AdminGenresComponent} from "./admin-genres/admin-genres.component";
import {AdminAccountComponent} from "./admin-account/admin-account.component";
import {AdminSongsComponent} from "./admin-songs/admin-songs.component";
import {VotGenresComponent} from "./vot-genres/vot-genres.component";
import {VotSongsComponent} from "./vot-songs/vot-songs.component";
import {VotVotesComponent} from "./vot-votes/vot-votes.component";
import {VotAccountComponent} from "./vot-account/vot-account.component";
import {AdminAddGenreComponent} from "./admin-add-genre/admin-add-genre.component";
import {AdminEditGenreComponent} from "./admin-edit-genre/admin-edit-genre.component";
import {AdminAddSongComponent} from "./admin-add-song/admin-add-song.component";
import {AdminEditSongComponent} from "./admin-edit-song/admin-edit-song.component";

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
