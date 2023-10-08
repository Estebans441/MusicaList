import {Injectable} from '@angular/core';
import axios, {AxiosResponse} from 'axios';
import {Votante} from "../models/votante.model";
import {Cancion} from "../models/cancion.model";
import {from, Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class VotanteService{
  constructor() {
  }

  private apiUrl = "http://localhost:8080/musicalist/api/votante/";

  // Crear votante
  createVotante(votante: Votante): Observable<Votante> {
    return from(axios.post(this.apiUrl + "crear", votante)).pipe(
      map((response: AxiosResponse) => response.data),
      catchError((error: any) => throwError(error))
    );
  }

  // Obtener todos los votantes.
  getAllVotantes(): Observable<Votante[]> {
    return from(axios.get(this.apiUrl + "all")).pipe(
      map((response: AxiosResponse) => response.data),
      catchError((error: any) => throwError(error))
    );
  }

  // Obtener votante por ID.
  getVotanteById(id: number): Observable<Votante> {
    return from(axios.get(this.apiUrl + id)).pipe(
      map((response: AxiosResponse) => response.data),
      catchError((error: any) => throwError(error))
    );
  }

  // Realizar voto teniendo id del votante e id de la canción
  realizarVoto(idVotante: number, idCancion: number): Observable<Votante> {
    return from(axios.put(this.apiUrl + "votar/" + idVotante + "-" + idCancion)).pipe(
      map((response: AxiosResponse) => response.data),
      catchError((error: any) => throwError(error))
    );
  }

  // Eliminar voto teniendo id del votante e id de la canción
  eliminarVoto(idVotante: number, idCancion: number): Observable<Votante> {
    return from(axios.put(this.apiUrl + "eliminar-voto/" + idVotante + "-" + idCancion)).pipe(
      map((response: AxiosResponse) => response.data),
      catchError((error: any) => throwError(error))
    );
  }

}
