import {Cuenta} from "./cuenta.model";

export class Administrador implements Cuenta{
  activada: boolean;
  correo: string;
  idCuenta: number;
  nombreUsuario: string;

  constructor(idCuenta: number, activada: boolean, correo: string, nombreUsuario: string) {
    this.activada = activada;
    this.correo = correo;
    this.idCuenta = idCuenta;
    this.nombreUsuario = nombreUsuario;
  }
}
