import {Component, OnInit} from '@angular/core';
import {GeneroMusical} from "../models/generoMusical.model";
import {GeneroMusicalService} from "../services/generoMusical.service";
import {Cancion} from "../models/cancion.model";
import {AdministradorService} from "../services/administrador.service";
import {MatDialog} from "@angular/material/dialog";
import {AdminAddGenreComponent} from "../admin-add-genre/admin-add-genre.component";


@Component({
  selector: 'app-admin-genres',
  templateUrl: './admin-genres.component.html',
  styleUrls: ['./admin-genres.component.css']
})
export class AdminGenresComponent implements OnInit {
  generosMusicales: GeneroMusical[] = [];
  canciones: Cancion[] = [];

  constructor(private generoMusicalService: GeneroMusicalService, private administradorService: AdministradorService, public dialog: MatDialog) {
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

  eliminarGenero(id: number) {
    if (this.administradorService.administrador.idCuenta == -1)
      alert("Es necesario iniciar sesion para borrar un genero")
    else {
      this.generoMusicalService.deleteGeneroMusicalById(id).subscribe((genero: GeneroMusical) => {
        this.generosMusicales = this.generosMusicales.filter((genero: GeneroMusical) => genero.idGenero != id)
      })
    }
  }
}
