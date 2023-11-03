import {Cancion} from "./cancion.model";

export class GeneroMusical{
    idGenero : number;
    nombreGenero : string;
    descripcion : string;
    canciones : Cancion[];
    numCanciones : number;

    constructor(idGenero : number, nombreGenero : string, descripcion : string, canciones : Cancion[], numCanciones:number){
        this.idGenero = idGenero;
        this.nombreGenero = nombreGenero;
        this.descripcion = descripcion;
        this.canciones = canciones;
        this.numCanciones = numCanciones;
    }
}
