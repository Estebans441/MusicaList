import {Component, OnInit} from '@angular/core';
import {Cuenta} from "../../../models/entities/cuenta.model";
import {CuentaService} from "../../../services/cuenta.service";

@Component({
  selector: 'app-vot-account',
  templateUrl: './vot-account.component.html',
  styleUrls: ['./vot-account.component.css']
})
export class VotAccountComponent {
  public cuenta: Cuenta = new Cuenta(-1, "", "", "")

  constructor(private cuentaService: CuentaService) {
    this.cuentaService.getCuenta().subscribe((res) => {
      this.cuenta = res;
    })
  }
}
