import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CancionService} from "../services/cancion.service";
import {Cancion} from "../models/cancion.model";
import {toNumbers} from "@angular/compiler-cli/src/version_helpers";

@Component({
  selector: 'app-admin-songs',
  templateUrl: './admin-songs.component.html',
  styleUrls: ['./admin-songs.component.css']
})
export class AdminSongsComponent {
  id: number
  canciones: Cancion[] = [];

  constructor(private route: ActivatedRoute, private cancionService: CancionService) {
    this.id = -1;
  }

  ngOnInit(): void {
    let stringN = this.route.snapshot.paramMap.get('id')
    if (stringN == null) this.id = -1
    else this.id = parseInt(stringN)
    this.cancionService.getCancionesByGeneroId(this.id).subscribe((canciones: Cancion[]) => {
        this.canciones = canciones;
      }
    )
  }
}
