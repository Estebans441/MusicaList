import {Cancion} from "./cancion.model";

export class Votante{
  cuenta_id : number;
  cancionesVotadas : Cancion[];

  constructor(cuenta_id: number, cancionesVotadas: Cancion[]) {
    this.cuenta_id = cuenta_id;
    this.cancionesVotadas = cancionesVotadas;
  }
}
