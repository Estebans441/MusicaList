import {Cuenta} from "../entities/cuenta.model";

export class AuthModel {
  role: String;
  cuenta: Cuenta;

  constructor(role: String, cuenta: Cuenta) {
    this.role = role;
    this.cuenta = cuenta;
  }
}

export class AuthDTO {
  token:string;
  prefijo:String;
  dto : AuthModel;

  constructor(token: string, prefijo: String, dto: AuthModel) {
    this.token = token;
    this.prefijo = prefijo;
    this.dto = dto;
  }
}
