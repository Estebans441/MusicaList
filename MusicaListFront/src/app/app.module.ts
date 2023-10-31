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
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {MainAdminComponent} from './main-admin/main-admin.component';
import {FormsModule} from "@angular/forms";
import {CuentaService} from "./services/cuenta.service";
import {VotanteService} from "./services/votante.service";
import {AdministradorService} from "./services/administrador.service";
import {MainVotComponent} from './main-vot/main-vot.component';
import {AdminMenuComponent} from './admin-menu/admin-menu.component';
import {AdminGenresComponent} from './admin-genres/admin-genres.component';
import {AdminAccountComponent} from './admin-account/admin-account.component';
import {VotMenuComponent} from './vot-menu/vot-menu.component';
import {AdminSongsComponent} from './admin-songs/admin-songs.component';
import {VotGenresComponent} from './vot-genres/vot-genres.component';
import {VotSongsComponent} from './vot-songs/vot-songs.component';
import {VotVotesComponent} from './vot-votes/vot-votes.component';
import {VotSearchComponent} from './vot-search/vot-search.component';
import {AdminAddGenreComponent} from './admin-add-genre/admin-add-genre.component';
import {AdminAddSongComponent} from './admin-add-song/admin-add-song.component';
import {AdminEditSongComponent} from './admin-edit-song/admin-edit-song.component';
import {AdminEditGenreComponent} from './admin-edit-genre/admin-edit-genre.component';
import {VotAccountComponent} from './vot-account/vot-account.component';
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
