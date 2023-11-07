import {Component, inject, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CuentaService} from "../../../services/cuenta.service";
import {Login} from "../../../models/dto/login.model";
import {VotanteService} from "../../../services/votante.service";
import {AdministradorService} from "../../../services/administrador.service";
import {CookieService} from "ngx-cookie-service";
import {HashService} from "../../../services/hash.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form = new Login("", "")
  errorMessage = ""
  cookieService = inject(CookieService)

  constructor(private cuentaService: CuentaService,
              private votanteService: VotanteService,
              private adminService: AdministradorService,
              private router: Router,
              private hashService: HashService) {
  }

  ngOnInit() {
    if (this.cookieService.check('JWT-token') && this.cookieService.check('role')) {
      this.cuentaService.getCuentaToken(this.cookieService.get('JWT-token')).subscribe((res) => {
        let role = this.cookieService.get('role')
        if (role == "Admin") {
          this.adminService.administrador = res;
          this.router.navigate(['/admin'])
        } else {
          this.votanteService.votante = res;
          this.router.navigate(['/vot'])
        }
      })
    }
  }

  iniciarSesion() {
    this.cuentaService.getCuentaLogin(this.form.usuarioCorreo, this.hashService.hashSHA256(this.form.contrasena)).subscribe({
      next: (resultado) => {
        this.cookieService.set('JWT-token', resultado.token)
        this.cookieService.set('role', resultado.dto.role)
        if (resultado.dto.role == "Admin") {
          this.adminService.administrador = resultado.dto.cuenta
          this.loginAsAdmin(resultado.dto.cuenta.idCuenta)
        } else {
          //this.votanteService.votante = resultado.dto.cuenta
          this.loginAsVot(resultado.dto.cuenta.idCuenta)
        }
      },
      error: (error) => {
        this.errorMessage = "Nombre de usuario o contraseña incorrectos"
      },
    });
  }

  loginAsAdmin(uid: number) {
    this.adminService.obtenerAdministradorPorId(uid).subscribe({
      next: (res) => {
        this.adminService.administrador = res;
        this.router.navigate(['/admin'])
      }
    })
  }

  loginAsVot(uid: number) {
    this.votanteService.getVotanteById(uid).subscribe(res => {
      this.votanteService.votante = res;
      this.router.navigate(['/vot'])
    })
  }
}