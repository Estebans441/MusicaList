import {Component, inject} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-vot-menu',
  templateUrl: './vot-menu.component.html',
  styleUrls: ['./vot-menu.component.css']
})
export class VotMenuComponent {
  cookieService = inject(CookieService)

  constructor(private router: Router) {
  }

  cerrarSesion() {
    this.cookieService.deleteAll()
    this.cookieService.delete("JWT-token")
    this.cookieService.delete("role")
    this.router.navigate(['*'])
  }

  verCuenta() {
    if (this.cookieService.check("JWT-token"))
      this.router.navigate(['/vot/account'])
    else
      alert("Es necesario iniciar sesion para realizar esta accion")
  }

  verVotos() {
    if (this.cookieService.check('JWT-token')) {
      if (this.cookieService.get('role') == 'Admin')
        alert("No tienes permisos para realizar esta acción");
      else this.router.navigate(['/vot/votes'])
    } else
      alert("Es necesario iniciar sesion para realizar esta accion")
  }
}
