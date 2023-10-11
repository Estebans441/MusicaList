import {Component, OnInit} from '@angular/core';
import {Votante} from "../models/votante.model";
import {VotanteService} from "../services/votante.service";

@Component({
  selector: 'app-admin-account',
  templateUrl: './admin-account.component.html',
  styleUrls: ['./admin-account.component.css']
})
export class AdminAccountComponent implements OnInit{
  votante = new Votante(-1,false, "", "", "", [])

  constructor(private votanteService : VotanteService) {
  }

  ngOnInit() {
    this.votante = this.votanteService.votante
  }
}
