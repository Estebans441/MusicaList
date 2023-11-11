import {Component, inject, OnInit} from '@angular/core';
import {GeneroMusical} from "../../../../models/entities/generoMusical.model";
import {GeneroMusicalService} from "../../../../services/generoMusical.service";
import {Cancion} from "../../../../models/entities/cancion.model";
import {MatDialog} from "@angular/material/dialog";
import {AdminAddGenreComponent} from "../add-genre/admin-add-genre.component";
import {AdminEditGenreComponent} from "../edit-genre/admin-edit-genre.component";
import {CookieService} from "ngx-cookie-service";
import {AxiosError} from "axios";


@Component({
  selector: 'app-admin-genres',
  templateUrl: './admin-genres.component.html',
  styleUrls: ['./admin-genres.component.css']
})
export class AdminGenresComponent implements OnInit {
  generosMusicales: GeneroMusical[] = [];
  canciones: Cancion[] = [];
  cookieService = inject(CookieService)

  constructor(private generoMusicalService: GeneroMusicalService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.generoMusicalService.getAllGenerosMusicales().subscribe(
      (generosMusicales: GeneroMusical[]) => {
        this.generosMusicales = generosMusicales;
      }
    );
  }

  agregar() {
    if (this.checkToken()) {
      const dialogRef = this.dialog.open(AdminAddGenreComponent, {
        height: '300px',
        width: '400px',
      });

      dialogRef.afterClosed().subscribe(result => {
        let genero: GeneroMusical = result['genero'];
        this.generoMusicalService.createGeneroMusical(genero).subscribe({
          next: () => {
            this.generoMusicalService.getAllGenerosMusicales().subscribe(
              (generosMusicales: GeneroMusical[]) => {
                this.generosMusicales = generosMusicales;
              }
            )
          },
          error: (error: AxiosError) => {
            if (error.response && error.response.status === 403)
              alert("No tienes permisos para realizar esta acción");
            else
              alert("Error desconocido");
          }
        })
      })
    }
  }

  editar(genreId: number, genreNombre: string, genreDesc: string) {
    if (this.checkToken()) {
      const dialogRef = this.dialog.open(AdminEditGenreComponent, {
        height: '300px',
        width: '400px',
        data: {name: genreNombre, desc: genreDesc}
      });

      dialogRef.afterClosed().subscribe((result) => {
          let genero: GeneroMusical = result['genero'];
          this.generoMusicalService.updateGeneroMusicalById(genreId, genero).subscribe({
            next: res => {
              this.generoMusicalService.getAllGenerosMusicales().subscribe(
                (generosMusicales: GeneroMusical[]) => {
                  this.generosMusicales = generosMusicales;
                }
              )
            },
            error: (error: AxiosError) => {
              if (error.response && error.response.status === 403)
                alert("No tienes permisos para realizar esta acción");
              else
                alert("Error desconocido");
            }
          })
        }
      )
    }
  }

  eliminarGenero(id: number) {
    if (this.checkToken()) {
      this.generoMusicalService.deleteGeneroMusicalById(id).subscribe({
        next: (genero: GeneroMusical) => {
          this.generosMusicales = this.generosMusicales.filter((genero: GeneroMusical) => genero.idGenero != id)
        },
        error: (error: AxiosError) => {
          if (error.response && error.response.status === 403)
            alert("No tienes permisos para realizar esta acción");
          else
            alert("Error desconocido");
        }
      })
    }
  }

  checkToken() {
    if (!this.cookieService.check('JWT-token')) {
      alert("Es necesario iniciar sesion para realizar esta accion")
      return false;
    }
    return true;
  }
}
