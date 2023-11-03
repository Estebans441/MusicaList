import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {VotanteService} from "../../../services/votante.service";
import {Votante} from "../../../models/entities/votante.model";

@Component({
  selector: 'app-vot-votes',
  templateUrl: './vot-votes.component.html',
  styleUrls: ['./vot-votes.component.css']
})
export class VotVotesComponent implements OnInit {
  votante: Votante;

  constructor(private votanteService: VotanteService, private router: Router) {
    if (votanteService.votante.idCuenta == -1) {
      this.router.navigate([""])
    }
    this.votante = this.votanteService.votante
  }

  ngOnInit(): void {
    this.votanteService.getVotante$().subscribe(votante => {
      this.votante = votante
    })
  }

  eliminarVoto(id: number) {
    this.votanteService.eliminarVoto(this.votanteService.votante.idCuenta, id).subscribe(response => {
      if (response)
        alert("Voto eliminado con exito")
      else alert("Error eliminando el voto")
    })
  }
}
