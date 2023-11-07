import {Component, OnInit} from '@angular/core';
import {Votante} from "../../../models/entities/votante.model";
import {VotanteService} from "../../../services/votante.service";

@Component({
  selector: 'app-vot-account',
  templateUrl: './vot-account.component.html',
  styleUrls: ['./vot-account.component.css']
})
export class VotAccountComponent implements OnInit {
  votante = new Votante(-1, false, "", "", [])

  constructor(private votanteService: VotanteService) {
  }

  ngOnInit() {
    this.votante = this.votanteService.votante
  }
}
