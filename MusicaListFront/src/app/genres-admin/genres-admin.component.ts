import {Component, OnInit} from '@angular/core';
import {AdministradorService} from "../services/administrador.service";
import {Administrador} from "../models/administrador.model";

@Component({
  selector: 'app-genres-admin',
  templateUrl: './genres-admin.component.html',
  styleUrls: ['./genres-admin.component.css']
})
export class GenresAdminComponent implements OnInit{

  constructor(public adminService:AdministradorService) {
  }

  ngOnInit() {
  }
}
