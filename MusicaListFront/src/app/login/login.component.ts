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
  errorMessage = ""

  constructor(private cuentaService:CuentaService, private votanteService:VotanteService, private adminService:AdministradorService, private router:Router) {
  }

  ngOnInit() {

  }

  iniciarSesion() {
    const login = this.form
    this.cuentaService.getCuentaLogin(login).subscribe({
      next: (resultado) => {
        if (resultado != -1) { // Existe cuenta con dichas credenciales
          this.adminService.obtenerAdministradorPorId(resultado).subscribe((res: Administrador) => {
            this.adminService.administrador = res;
            if(res.idCuenta != -1){ // Es un administrador
              this.router.navigate(['/admin']);
            }
            else{
              this.votanteService.getVotanteById(resultado).subscribe((vot:Votante)=>{
                this.votanteService.votante = vot;
                if(vot.idCuenta !=-1){
                  this.router.navigate(['/vot'])
                }
              })
            }
          });
        } else {
          // Lógica para el caso de resultado falso
          this.errorMessage = "Nombre de usuario o contraseña incorrectos"
        }
      },
      error: (error) => {
        // Manejar errores aquí
      },
    });
  }
}
