import {Component, inject} from '@angular/core';
import {Cancion} from "../../../models/entities/cancion.model";
import {CancionService} from "../../../services/cancion.service";
import {VotanteService} from "../../../services/votante.service";
import {AxiosError} from "axios";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-vot-search',
  templateUrl: './vot-search.component.html',
  styleUrls: ['./vot-search.component.css']
})
export class VotSearchComponent {
  canciones: Cancion[];
  input = ""
  cookieService = inject(CookieService)

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
    if(this.checkToken()) {
      this.votanteService.realizarVoto(id).subscribe({
        next: () => {
          alert("Voto realizado con exito")
          this.buscarCanciones()
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
