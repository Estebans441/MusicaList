import {Component} from '@angular/core';
import {AdministradorService} from "../../../services/administrador.service";
import {VotanteService} from "../../../services/votante.service";
import {Administrador} from "../../../models/administrador.model";
import {Router} from "@angular/router";
import {Votante} from "../../../models/votante.model";
import {HashService} from "../../../services/hash.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  form = {
    nombre: "",
    correo: "",
    contrasena: ""
  }
  errorMessage = ""

  constructor(private administradorService: AdministradorService, private votanteService: VotanteService, private router: Router,
              private hashService: HashService) {
  }

  public registrarAdmin() {
    if (this.validarFormulario()) {
      this.administradorService.crearAdministrador(
        new Administrador(-1, false, this.hashService.hashSHA256(this.form.contrasena), this.form.correo, this.form.nombre))
        .subscribe((administrador: Administrador) => {
          if (administrador.idCuenta != -1)
            this.router.navigate(["/login"])
          else
            this.errorMessage = "Nombre de usuario o correo existentes"
        })
    }
  }

  public registrarVot() {
    if (this.validarFormulario()) {
      this.votanteService.createVotante(
        new Votante(-1, false, this.hashService.hashSHA256(this.form.contrasena), this.form.correo, this.form.nombre, []))
        .subscribe((votante: Votante) => {
          if (votante.idCuenta != -1)
            this.router.navigate(["/login"])
          else
            this.errorMessage = "Nombre de usuario o correo existentes"
        })
    }
  }

  public validarFormulario() {
    // Reinicia el mensaje de error
    this.errorMessage = "";

    // Verifica si alguno de los campos está vacío
    if (!this.form.nombre || !this.form.correo || !this.form.contrasena) {
      this.errorMessage = "Todos los campos son obligatorios";
      return false;
    }

    // Verifica si el correo electrónico tiene un formato válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.form.correo)) {
      this.errorMessage = "El correo electrónico no es válido";
      return false;
    }

    // Verifica si la contraseña cumple con ciertos requisitos (por ejemplo, longitud mínima)
    if (this.form.contrasena.length < 8) {
      this.errorMessage = "La contraseña debe tener al menos 8 caracteres";
      return false;
    }

    // Si llegamos hasta aquí, significa que el formulario es válido
    return true;
  }
}
