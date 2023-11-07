import {Component, OnInit} from '@angular/core';
import {VotanteService} from "../../../services/votante.service";
import {Cuenta} from "../../../models/entities/cuenta.model";

@Component({
  selector: 'app-vot-account',
  templateUrl: './vot-account.component.html',
  styleUrls: ['./vot-account.component.css']
})
export class VotAccountComponent implements OnInit {
  votante : Cuenta;
  constructor(private votanteService: VotanteService) {
    this.votante = votanteService.votante;
  }

  ngOnInit() {
  }
}
