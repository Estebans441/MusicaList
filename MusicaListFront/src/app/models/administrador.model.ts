import {Cuenta} from "./cuenta.model";

export class Administrador implements Cuenta{
  cuenta_id : number;
  activada: boolean;
  contrasena: string;
  correo: string;
  idCuenta: number;
  nombreUsuario: string;
  constructor(cuenta_id : number, activada: boolean, contrasena: string, correo: string, idCuenta: number, nombreUsuario: string) {
    this.cuenta_id = idCuenta;
    this.activada = activada;
    this.contrasena = contrasena;
    this.correo = correo;
    this.idCuenta = idCuenta;
    this.nombreUsuario = nombreUsuario;
  }
}
