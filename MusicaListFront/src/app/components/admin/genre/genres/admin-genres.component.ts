import {Component, inject, OnInit} from '@angular/core';
import {GeneroMusical} from "../../../../models/entities/generoMusical.model";
import {GeneroMusicalService} from "../../../../services/generoMusical.service";
import {Cancion} from "../../../../models/entities/cancion.model";
import {MatDialog} from "@angular/material/dialog";
import {AdminAddGenreComponent} from "../add-genre/admin-add-genre.component";
import {AdminEditGenreComponent} from "../edit-genre/admin-edit-genre.component";
import {CookieService} from "ngx-cookie-service";


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
    const dialogRef = this.dialog.open(AdminAddGenreComponent, {
      height: '300px',
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        let genero: GeneroMusical = result['genero'];
        this.generoMusicalService.createGeneroMusical(genero).subscribe(res => {
          this.generoMusicalService.getAllGenerosMusicales().subscribe(
            (generosMusicales: GeneroMusical[]) => {
              this.generosMusicales = generosMusicales;
            }
          )
        })
      }
    })
  }

  editar(genreId:number, genreNombre:string, genreDesc:string) {
    const dialogRef = this.dialog.open(AdminEditGenreComponent, {
      height: '300px',
      width: '400px',
      data: {name: genreNombre, desc: genreDesc}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        let genero: GeneroMusical = result['genero'];
        this.generoMusicalService.updateGeneroMusicalById(genreId, genero).subscribe(res => {
          this.generoMusicalService.getAllGenerosMusicales().subscribe(
            (generosMusicales: GeneroMusical[]) => {
              this.generosMusicales = generosMusicales;
            }
          )
        })
      }
    })
  }

  eliminarGenero(id: number) {
    if (this.cookieService.check('JWT-token'))
      alert("Es necesario iniciar sesion para borrar un genero")
    else {
      this.generoMusicalService.deleteGeneroMusicalById(id).subscribe((genero: GeneroMusical) => {
        this.generosMusicales = this.generosMusicales.filter((genero: GeneroMusical) => genero.idGenero != id)
      })
    }
  }
}
