import {GeneroMusical} from "./generoMusical.model";

export class Cancion {
  idCancion: number;
  nombre: string;
  artista: string;
  duracionSeg: number;
  generoMusical: GeneroMusical;
  numeroVotos: number;

  constructor(idCancion: number, nombre: string, artista: string, duracionSeg: number, generoMusical: GeneroMusical, numeroVotos: number){
    this.idCancion = idCancion;
    this.nombre = nombre;
    this.artista = artista;
    this.duracionSeg = duracionSeg;
    this.generoMusical = generoMusical;
    this.numeroVotos = numeroVotos;
  }
}
