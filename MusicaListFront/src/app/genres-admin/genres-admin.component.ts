import {Component, OnInit} from '@angular/core';
import {AdministradorService} from "../services/administrador.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-genres-admin',
  templateUrl: './genres-admin.component.html',
  styleUrls: ['./genres-admin.component.css']
})
export class GenresAdminComponent implements OnInit {

  constructor(public adminService: AdministradorService, private router: Router) {
  }

  ngOnInit() {
    if (this.adminService.administrador.idCuenta == -1){
      this.router.navigate([''])
    }
  }
}
