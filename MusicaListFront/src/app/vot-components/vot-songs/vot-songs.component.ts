import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GeneroMusicalService} from "../../services/generoMusical.service";
import {GeneroMusical} from "../../models/generoMusical.model";
import {VotanteService} from "../../services/votante.service";

@Component({
  selector: 'app-vot-songs',
  templateUrl: './vot-songs.component.html',
  styleUrls: ['./vot-songs.component.css']
})
export class VotSongsComponent implements OnInit {
  id: number
  genero: GeneroMusical = new GeneroMusical(-1, "", "", []);

  constructor(private route: ActivatedRoute, private generoService: GeneroMusicalService, private votanteService: VotanteService, private router: Router) {
    this.id = -1;
    if (votanteService.votante.idCuenta == -1) {
      this.router.navigate([""])
    }
  }

  ngOnInit(): void {
    let stringN = this.route.snapshot.paramMap.get('id')
    if (stringN == null) this.id = -1
    else this.id = parseInt(stringN)

    this.generoService.getGenero$(this.id).subscribe(genero => {
        this.genero = genero
        this.genero.canciones = this.genero.canciones.sort((a, b) => b.numeroVotos - a.numeroVotos);
      }
    )
  }

  votarCancion(id: number) {
    this.votanteService.realizarVoto(this.votanteService.votante.idCuenta, id).subscribe(ret => {
      if (ret) {
        this.generoService.actualizarGenero(this.id)
        alert("Voto realizado con exito")
      } else alert("Error realizando el voto")
    })
  }
}
