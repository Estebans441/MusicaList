import {Cancion} from "./cancion.model";
import {Cuenta} from "./cuenta.model";

export class Votante implements Cuenta{
  cancionesVotadas : Cancion[];
  activada: boolean;
  contrasena: string;
  correo: string;
  idCuenta: number;
  nombreUsuario: string;

  constructor(idCuenta: number, activada: boolean, contrasena: string, correo: string, nombreUsuario: string, cancionesVotadas: Cancion[]) {
    this.activada = activada;
    this.contrasena = contrasena;
    this.correo = correo;
    this.idCuenta = idCuenta;
    this.nombreUsuario = nombreUsuario;
    this.cancionesVotadas = cancionesVotadas
  }
}
