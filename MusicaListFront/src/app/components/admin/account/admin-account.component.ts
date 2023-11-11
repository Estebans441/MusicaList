import {Component, OnInit} from '@angular/core';
import {CuentaService} from "../../../services/cuenta.service";
import {Cuenta} from "../../../models/entities/cuenta.model";

@Component({
  selector: 'app-admin-account',
  templateUrl: './admin-account.component.html',
  styleUrls: ['./admin-account.component.css']
})
export class AdminAccountComponent {
  public cuenta : Cuenta = new Cuenta(-1,"","","")

  constructor(private cuentaService: CuentaService) {
    this.cuentaService.getCuenta().subscribe((res) => {
      this.cuenta = res;
    })
  }
}
