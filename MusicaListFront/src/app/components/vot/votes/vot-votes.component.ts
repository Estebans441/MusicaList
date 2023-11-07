import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {VotanteService} from "../../../services/votante.service";
import {Cancion} from "../../../models/entities/cancion.model";

@Component({
  selector: 'app-vot-votes',
  templateUrl: './vot-votes.component.html',
  styleUrls: ['./vot-votes.component.css']
})
export class VotVotesComponent implements OnInit {
  canciones: Cancion[] = []

  constructor(private votanteService: VotanteService, private router: Router) {
    if (votanteService.votante.idCuenta == -1) {
      this.router.navigate([""])
    }
  }

  ngOnInit(): void {
    this.votanteService.getVotosById().subscribe((res) => {
      this.canciones = res;
    })
  }

  eliminarVoto(id: number) {
    this.votanteService.eliminarVoto(this.votanteService.votante.idCuenta, id).subscribe(response => {
      if (response) {
        alert("Voto eliminado con exito")
        this.votanteService.getVotosById().subscribe((res) => {
          this.canciones = res;
        })
      } else alert("Error eliminando el voto")
    })
  }
}
