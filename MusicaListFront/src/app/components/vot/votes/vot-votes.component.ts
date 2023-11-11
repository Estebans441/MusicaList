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
  }

  ngOnInit(): void {
    this.votanteService.getVotos().subscribe((res) => {
      this.canciones = res;
    })
  }

  eliminarVoto(id: number) {
    this.votanteService.eliminarVoto(id).subscribe(response => {
      if (response) {
        alert("Voto eliminado con exito")
        this.votanteService.getVotos().subscribe((res) => {
          this.canciones = res;
        })
      } else alert("Error eliminando el voto")
    })
  }
}
