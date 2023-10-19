import {Component, OnInit} from '@angular/core';
import {GeneroMusical} from "../models/generoMusical.model";
import {GeneroMusicalService} from "../services/generoMusical.service";
import {Router} from "@angular/router";
import {Cancion} from "../models/cancion.model";
import {CancionService} from "../services/cancion.service";
import {AdministradorService} from "../services/administrador.service";

@Component({
  selector: 'app-admin-genres',
  templateUrl: './admin-genres.component.html',
  styleUrls: ['./admin-genres.component.css']
})
export class AdminGenresComponent implements OnInit {
  generosMusicales: GeneroMusical[] = [];
  canciones: Cancion[] = [];

  constructor(private generoMusicalService: GeneroMusicalService, private administradorService: AdministradorService) {
  }

  ngOnInit() {
    this.generoMusicalService.getAllGenerosMusicales().subscribe(
      (generosMusicales: GeneroMusical[]) => {
        this.generosMusicales = generosMusicales;
      }
    );
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
