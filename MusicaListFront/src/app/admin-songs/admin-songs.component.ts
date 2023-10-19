import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CancionService} from "../services/cancion.service";
import {Cancion} from "../models/cancion.model";
import {toNumbers} from "@angular/compiler-cli/src/version_helpers";
import {GeneroMusicalService} from "../services/generoMusical.service";
import {GeneroMusical} from "../models/generoMusical.model";
import {AdminAddGenreComponent} from "../admin-add-genre/admin-add-genre.component";
import {MatDialog} from "@angular/material/dialog";
import {AdminAddSongComponent} from "../admin-add-song/admin-add-song.component";

@Component({
  selector: 'app-admin-songs',
  templateUrl: './admin-songs.component.html',
  styleUrls: ['./admin-songs.component.css']
})
export class AdminSongsComponent {
  id: number
  canciones: Cancion[] = [];
  genero=""

  constructor(private route: ActivatedRoute, private cancionService: CancionService, private generoService:GeneroMusicalService, public dialog: MatDialog) {
    this.id = -1;
  }

  ngOnInit(): void {
    let stringN = this.route.snapshot.paramMap.get('id')
    if (stringN == null) this.id = -1
    else this.id = parseInt(stringN)
    this.generoService.getGeneroMusicalById(this.id).subscribe((genero: GeneroMusical) => {
        this.canciones = genero.canciones.sort((a, b) => b.numeroVotos - a.numeroVotos);
        this.genero = genero.nombreGenero
      }
    )
  }

  agregar() {
    const dialogRef = this.dialog.open(AdminAddSongComponent, {
      height: '350px',
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        let cancion: Cancion = result['cancion'];
        cancion.generoMusical.idGenero = this.id
        this.cancionService.createCancion(cancion).subscribe(res => {
          this.generoService.getGeneroMusicalById(this.id).subscribe((genero: GeneroMusical) => {
              this.canciones = genero.canciones.sort((a, b) => b.numeroVotos - a.numeroVotos);
              this.genero = genero.nombreGenero
            }
          )
        })
      }
    })
  }

  eliminarCancion(id: number) {
    this.cancionService.deleteCancionById(id).subscribe((cancion: Cancion) => {
      this.canciones = this.canciones.filter((cancion: Cancion) => cancion.idCancion != id)
    })
  }
}
