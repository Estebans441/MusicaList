import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {GeneroMusicalService} from './services/generoMusical.service';
import {LoginComponent} from './components/auth/login/login.component';
import {SignupComponent} from './components/auth/signup/signup.component';
import {MainAdminComponent} from './components/admin/main/main-admin.component';
import {FormsModule} from "@angular/forms";
import {CuentaService} from "./services/cuenta.service";
import {VotanteService} from "./services/votante.service";
import {AdministradorService} from "./services/administrador.service";
import {MainVotComponent} from './components/vot/main/main-vot.component';
import {AdminMenuComponent} from './components/admin/menu/admin-menu.component';
import {AdminGenresComponent} from './components/admin/genre/genres/admin-genres.component';
import {AdminAccountComponent} from './components/admin/account/admin-account.component';
import {VotMenuComponent} from './components/vot/menu/vot-menu.component';
import {AdminSongsComponent} from './components/admin/song/songs/admin-songs.component';
import {VotGenresComponent} from './components/vot/genres/vot-genres.component';
import {VotSongsComponent} from './components/vot/songs/vot-songs.component';
import {VotVotesComponent} from './components/vot/votes/vot-votes.component';
import {VotSearchComponent} from './components/vot/search/vot-search.component';
import {AdminAddGenreComponent} from './components/admin/genre/add-genre/admin-add-genre.component';
import {AdminAddSongComponent} from './components/admin/song/add-song/admin-add-song.component';
import {AdminEditSongComponent} from './components/admin/song/edit-song/admin-edit-song.component';
import {AdminEditGenreComponent} from './components/admin/genre/edit-genre/admin-edit-genre.component';
import {VotAccountComponent} from './components/vot/account/vot-account.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    MainAdminComponent,
    MainVotComponent,
    AdminMenuComponent,
    AdminGenresComponent,
    AdminAccountComponent,
    VotMenuComponent,
    AdminSongsComponent,
    VotGenresComponent,
    VotSongsComponent,
    VotVotesComponent,
    VotSearchComponent,
    AdminAddGenreComponent,
    AdminAddSongComponent,
    AdminEditSongComponent,
    AdminEditGenreComponent,
    VotAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatDialogModule,
    MatSelectModule
  ],
  providers: [
    GeneroMusicalService,
    CuentaService,
    VotanteService,
    AdministradorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
