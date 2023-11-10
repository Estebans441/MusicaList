import {Component, inject} from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-vot-menu',
  templateUrl: './vot-menu.component.html',
  styleUrls: ['./vot-menu.component.css']
})
export class VotMenuComponent {
  cookieService = inject(CookieService)
  cerrarSesion(){
    this.cookieService.deleteAll()
    this.cookieService.delete("JWT-token")
    this.cookieService.delete("role")
  }
}
