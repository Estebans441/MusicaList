import {Cuenta} from "./cuenta.model";

export class Administrador implements Cuenta{
  activada: boolean;
  contrasena: string;
  correo: string;
  idCuenta: number;
  nombreUsuario: string;

  constructor(idCuenta: number, activada: boolean, contrasena: string, correo: string, nombreUsuario: string) {
    this.activada = activada;
    this.contrasena = contrasena;
    this.correo = correo;
    this.idCuenta = idCuenta;
    this.nombreUsuario = nombreUsuario;
  }
}
