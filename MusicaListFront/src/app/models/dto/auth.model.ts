import {Cuenta} from "../entities/cuenta.model";

export class AuthDTO {
  token:string;
  prefijo:String;
  role : string;

  constructor(token: string, prefijo: String, role: string) {
    this.token = token;
    this.prefijo = prefijo;
    this.role = role;
  }
}
