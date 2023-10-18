import {Injectable} from '@angular/core';
import axios, {AxiosResponse} from 'axios';
import {GeneroMusical} from "../models/generoMusical.model";
import {from, Observable, Subject, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {G} from "@angular/cdk/keycodes";

@Injectable(
  {
    providedIn: 'root'
  }
)

export class GeneroMusicalService {
  private apiUrl: string = "http://localhost:8080/musicalist/api/genero/"
  private genero: GeneroMusical
  private genero$: Subject<GeneroMusical>

  constructor() {
    this.genero = new GeneroMusical(-1, "", "", [])
    this.genero$ = new Subject()
  }

  actualizarGenero(id: number) {
    this.getGeneroMusicalById(id).subscribe(genero => {
      this.genero = genero
      this.genero$.next(this.genero)
    })
  }

  getGenero$(id: number) {
    this.actualizarGenero(id)
    return this.genero$.asObservable()
  }

  // Crear un género musical.
  createGeneroMusical(generoMusical: GeneroMusical): Observable<GeneroMusical> {
    return from(axios.post(this.apiUrl + "crear", generoMusical)).pipe(
      map((response: AxiosResponse) => response.data),
      catchError((error: any) => throwError(error))
    );
  }

  // Obtener todos los géneros musicales.
  getAllGenerosMusicales(): Observable<GeneroMusical[]> {
    return from(axios.get(this.apiUrl + "all")).pipe(
      map((response: AxiosResponse) => response.data),
      catchError((error: any) => throwError(error))
    );
  }

  // Obtener un género musical por su ID.
  getGeneroMusicalById(id: number): Observable<GeneroMusical> {
    return from(axios.get(this.apiUrl + id)).pipe(
      map((response: AxiosResponse) => response.data),
      catchError((error: any) => throwError(error))
    );
  }

  // Actualizar un género musical por ID.
  updateGeneroMusicalById(id: number, generoMusical: GeneroMusical): Observable<GeneroMusical> {
    return from(axios.put(this.apiUrl + "actualizar/" + id, generoMusical)).pipe(
      map((response: AxiosResponse) => response.data),
      catchError((error: any) => throwError(error))
    );
  }

  // Eliminar un género musical por ID
  deleteGeneroMusicalById(id: number): Observable<GeneroMusical> {
    return from(axios.delete(this.apiUrl + "eliminar/" + id)).pipe(
      map((response: AxiosResponse) => response.data),
      catchError((error: any) => throwError(error))
    );
  }
}
