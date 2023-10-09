import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CuentaService} from "../services/cuenta.service";
import {Login} from "../models/login.model";
import {VotanteService} from "../services/votante.service";
import {AdministradorService} from "../services/administrador.service";
import {Administrador} from "../models/administrador.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form = {email: "", pass:""}

  constructor(private cuentaService:CuentaService, private votanteService:VotanteService, private adminService:AdministradorService, private router:Router) {
  }

  ngOnInit() {

  }

  iniciarAdministrador(){
    const login = new Login(this.form.email, this.form.pass);
    this.cuentaService.getCuentaLogin(login).subscribe((resultado) => {
        // Manejar el resultado de la autenticación aquí
        if (resultado) {
          console.log("Autenticacion exitiosa")
          this.adminService.obtenerAdministradorPorNombre(login.usuarioCorreo).subscribe((res : Administrador) : void =>{
              this.adminService.administrador = res
              console.log(res)
            }
          )
          this.router.navigate(['/genres-admin'])
        } else {

        }
      },
      (error) => {
        // Manejar errores aquí
      }
    );
  }

  iniciarVotante(){

  }
}
