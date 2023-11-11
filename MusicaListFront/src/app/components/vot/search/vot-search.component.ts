import {Component} from '@angular/core';
import {Cancion} from "../../../models/entities/cancion.model";
import {CancionService} from "../../../services/cancion.service";
import {VotanteService} from "../../../services/votante.service";

@Component({
  selector: 'app-vot-search',
  templateUrl: './vot-search.component.html',
  styleUrls: ['./vot-search.component.css']
})
export class VotSearchComponent {
  canciones: Cancion[];
  input = ""

  constructor(private votanteService: VotanteService, private cancionService: CancionService) {
    this.canciones = []
  }

  buscarCanciones() {
    if (this.input == "")
      this.canciones = []
    else
      this.cancionService.getCancionByNombre(this.input).subscribe(canciones => {
        this.canciones = canciones.sort((a, b) => b.numeroVotos - a.numeroVotos);
      })
  }

  votarCancion(id: number) {
    this.votanteService.realizarVoto(id).subscribe(ret => {
      if (ret) {
        alert("Voto realizado con exito")
        this.buscarCanciones()
      } else alert("Error realizando el voto")
    })
    // alert("Es necesario iniciar sesión para realizar un voto")
  }

}
