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
import { MainVotComponent } from './main-vot/main-vot.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { AdminGenresComponent } from './admin-genres/admin-genres.component';
import { AdminAccountComponent } from './admin-account/admin-account.component';
import { VotMenuComponent } from './vot-menu/vot-menu.component';
import { AdminSongsComponent } from './admin-songs/admin-songs.component';

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
    AdminSongsComponent
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
    FormsModule
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
