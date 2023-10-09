import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CuentaService} from "../services/cuenta.service";
import {Login} from "../models/login.model";
import {VotanteService} from "../services/votante.service";
import {AdministradorService} from "../services/administrador.service";
import {Administrador} from "../models/administrador.model";
import {Votante} from "../models/votante.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form = new Login("", "")

  constructor(private cuentaService:CuentaService, private votanteService:VotanteService, private adminService:AdministradorService, private router:Router) {
  }

  ngOnInit() {

  }

  iniciarAdministrador() {
    const login = this.form
    this.cuentaService.getCuentaLogin(login).subscribe({
      next: (resultado) => {
        if (resultado) {
          this.adminService.obtenerAdministradorPorNombre(login.usuarioCorreo).subscribe((res: Administrador) => {
            this.adminService.administrador = res;
            if(res.idCuenta != null){
              this.router.navigate(['/admin']);
            }
            else{
              this.iniciarVotante()
            }
          });
        } else {
          // Lógica para el caso de resultado falso
        }
      },
      error: (error) => {
        // Manejar errores aquí
      },
    });
  }


  iniciarVotante(){
    const login = this.form
    this.cuentaService.getCuentaLogin(login).subscribe({
      next: (resultado) => {
        if (resultado) {
          this.votanteService.getVotanteByNombre(login.usuarioCorreo).subscribe((res: Votante) => {
            this.votanteService.votante = res;
            if(res.idCuenta != null){
              this.router.navigate(['/vot']);
            }
            else{
              this.iniciarAdministrador()
            }
          });
        } else {
          // Lógica para el caso de resultado falso
        }
      },
      error: (error) => {
        // Manejar errores aquí
      },
    });
  }
}
