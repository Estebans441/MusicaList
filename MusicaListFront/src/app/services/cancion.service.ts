import {Injectable} from '@angular/core';
import axios, {AxiosResponse} from 'axios';
import {Cancion} from "../models/cancion.model";
import {from, Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";

@Injectable(
  {
    providedIn: 'root'
  }
)

export class CancionService {
  private apiUrl: string = "http://localhost:8080/musicalist/api/cancion/";

  constructor() {
  }

  // Crear una cancion.
  createCancion(cancion: Cancion): Observable<Cancion> {
    return from(axios.post(this.apiUrl + "crear", cancion)).pipe(
      map((response: AxiosResponse) => response.data),
      catchError((error: any) => throwError(error))
    );
  }

  // Obtener todas las canciones.
  getAllCanciones(): Observable<Cancion[]> {
    return from(axios.get(this.apiUrl + "all")).pipe(
      map((response: AxiosResponse) => response.data),
      catchError((error: any) => throwError(error))
    );
  }

  // Obtener una cancion por su ID.
  getCancionById(id: number): Observable<Cancion> {
    return from(axios.get(this.apiUrl + id)).pipe(
      map((response: AxiosResponse) => response.data),
      catchError((error: any) => throwError(error))
    );
  }

  // Obtener cancion por nombre similar
  getCancionByNombre(nombre: String): Observable<Cancion[]> {
    return from(axios.get(this.apiUrl + "name-like/" + nombre)).pipe(
      map((response: AxiosResponse) => response.data),
      catchError((error: any) => throwError(error))
    );
  }

  // Obtener canciones de acuerdo con el ID del género pasado como parámetro.
  getCancionesByGeneroId(id: number): Observable<Cancion[]> {
    return from(axios.get(this.apiUrl + "cancionesGenero/" + id)).pipe(
      map((response: AxiosResponse) => response.data),
      catchError((error: any) => throwError(error))
    );
  }


  // Actualizar una cancion por ID.
  updateCancionById(id: number, cancion: Cancion): Observable<Cancion> {
    return from(axios.put(this.apiUrl + "actualizar/" + id, cancion)).pipe(
      map((response: AxiosResponse) => response.data),
      catchError((error: any) => throwError(error))
    );
  }

  // Eliminar una cancion por ID
  deleteCancionById(id: number): Observable<Cancion> {
    return from(axios.delete(this.apiUrl + "eliminar/" + id)).pipe(
      map((response: AxiosResponse) => response.data),
      catchError((error: any) => throwError(error))
    );
  }
}

