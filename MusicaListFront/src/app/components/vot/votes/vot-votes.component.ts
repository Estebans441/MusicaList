import {Component, inject, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {VotanteService} from "../../../services/votante.service";
import {Cancion} from "../../../models/entities/cancion.model";
import {AxiosError} from "axios";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-vot-votes',
  templateUrl: './vot-votes.component.html',
  styleUrls: ['./vot-votes.component.css']
})
export class VotVotesComponent implements OnInit {
  canciones: Cancion[] = []
  cookieService = inject(CookieService)

  constructor(private votanteService: VotanteService, private router: Router) {
  }

  ngOnInit(): void {
    if (this.checkToken()) {
      this.votanteService.getVotos().subscribe({
        next: (res) => {
          this.canciones = res;
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

  eliminarVoto(id: number) {
    this.votanteService.eliminarVoto(id).subscribe({
      next: () => {
        alert("Voto eliminado con exito")
        this.votanteService.getVotos().subscribe((res) => {
          this.canciones = res;
        })
      },
      error: (error: AxiosError) => {
        if (error.response && error.response.status === 403)
          alert("No tienes permisos para realizar esta acción");
        else
          alert("Error desconocido");
      }
    })
  }

  checkToken() {
    if (!this.cookieService.check('JWT-token')) {
      alert("Es necesario iniciar sesion para realizar esta accion")
      return false;
    }
    return true;
  }
}
