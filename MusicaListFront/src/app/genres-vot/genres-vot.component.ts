import {Component, OnInit} from '@angular/core';
import {AdministradorService} from "../services/administrador.service";
import {Router} from "@angular/router";
import {VotanteService} from "../services/votante.service";

@Component({
  selector: 'app-genres-vot',
  templateUrl: './genres-vot.component.html',
  styleUrls: ['./genres-vot.component.css']
})
export class GenresVotComponent implements OnInit {

  constructor(public votanteService: VotanteService, private router: Router) {
  }

  ngOnInit() {
    if (this.votanteService.votante.idCuenta == -1){
      this.router.navigate([''])
    }
  }
}
