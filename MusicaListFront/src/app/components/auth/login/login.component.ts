import {Component, inject, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CuentaService} from "../../../services/cuenta.service";
import {Login} from "../../../models/dto/login.model";
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
              private router: Router,
              private hashService: HashService) {
  }

  ngOnInit() {
    if (this.cookieService.check('JWT-token') && this.cookieService.check('role')) {
      if (this.cookieService.get('role') == "Admin")
        this.router.navigate(['/admin'])
      else
        this.router.navigate(['/vot'])
    }
  }

  iniciarSesion() {
    this.cuentaService.getCuentaLogin(this.form.usuarioCorreo, this.hashService.hashSHA256(this.form.contrasena)).subscribe({
      next: (resultado) => {
        this.cookieService.set('JWT-token', resultado.token)
        this.cookieService.set('role', resultado.role)
        if (resultado.role == "Admin") {
          this.router.navigate(['/admin'])
        } else {
          this.router.navigate(['/vot'])
        }
      },
      error: (error) => {
        this.errorMessage = "Nombre de usuario o contraseña incorrectos"
      },
    });
  }
}
