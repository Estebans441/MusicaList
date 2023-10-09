import {Cancion} from "./cancion.model";
import {Cuenta} from "./cuenta.model";

export class Votante implements Cuenta{
  cancionesVotadas : Cancion[];
  activada: boolean;
  contrasena: string;
  correo: string;
  idCuenta: number;
  nombreUsuario: string;
  cuenta_id : number;

  constructor(cuenta_id : number, cancionesVotadas: Cancion[], activada: boolean, contrasena: string, correo: string, idCuenta: number, nombreUsuario: string) {
    this.cuenta_id = idCuenta;
    this.cancionesVotadas = cancionesVotadas;
    this.activada = activada;
    this.contrasena = contrasena;
    this.correo = correo;
    this.idCuenta = idCuenta;
    this.nombreUsuario = nombreUsuario;
  }
}
