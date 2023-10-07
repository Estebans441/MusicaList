import {Cancion} from "./cancion.model";

export class GeneroMusical{
    idGenero : number;
    nombreGenero : string;
    descripcion : string;
    canciones : Cancion[];

    constructor(idGenero : number, nombreGenero : string, descripcion : string, canciones : Cancion[]){
        this.idGenero = idGenero;
        this.nombreGenero = nombreGenero;
        this.descripcion = descripcion;
        this.canciones = canciones;
    }
}
