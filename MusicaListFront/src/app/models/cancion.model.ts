import {GeneroMusical} from "./generoMusical.model";

export class Cancion {
    idCancion : number;
    nombre : string;
    artista : string;
    duracionSeg : number;
    generoMusical : GeneroMusical

    constructor(idCancion : number, nombre : string, artista : string, duracionSeg : number, generoMusical : GeneroMusical){
        this.idCancion = idCancion;
        this.nombre = nombre;
        this.artista = artista;
        this.duracionSeg = duracionSeg;
        this.generoMusical = generoMusical;
    }

}
