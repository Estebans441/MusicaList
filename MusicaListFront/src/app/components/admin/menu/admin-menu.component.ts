import {Component, inject} from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent {
  cookieService = inject(CookieService)
  cerrarSesion(){
    this.cookieService.deleteAll()
    this.cookieService.delete("JWT-token")
    this.cookieService.delete("role")
  }
}
