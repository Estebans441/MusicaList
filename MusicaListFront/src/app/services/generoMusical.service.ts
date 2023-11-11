import {inject, Injectable} from '@angular/core';
import axios, {AxiosResponse} from 'axios';
import {GeneroMusical} from "../models/entities/generoMusical.model";
import {config, from, Observable, Subject, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {CookieService} from "ngx-cookie-service";

@Injectable(
  {
    providedIn: 'root'
  }
)

export class GeneroMusicalService {
  private apiUrl: string = "http://localhost:8080/musicalist/api/generos/"
  private genero: GeneroMusical
  private genero$: Subject<GeneroMusical>
  private cookieService = inject(CookieService)

  constructor() {
    this.genero = new GeneroMusical(-1, "", "", [], 0)
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
    return from(axios.post(this.apiUrl, generoMusical, {
      headers: {'jwt-token': this.cookieService.get('JWT-token')}
    })).pipe(
      map((response: AxiosResponse) => response.data)
    )
  }

  // Obtener todos los géneros musicales.
  getAllGenerosMusicales(): Observable<GeneroMusical[]> {
    return from(axios.get(this.apiUrl)).pipe(
      map((response: AxiosResponse) => response.data)
    )
  }

  // Obtener un género musical por su ID.
  getGeneroMusicalById(id: number): Observable<GeneroMusical> {
    return from(axios.get(this.apiUrl + id)).pipe(
      map((response: AxiosResponse) => response.data)
    )
  }

  // Actualizar un género musical por ID.
  updateGeneroMusicalById(id: number, generoMusical: GeneroMusical): Observable<GeneroMusical> {
    return from(axios.put(this.apiUrl + id, generoMusical, {
      headers: {'jwt-token': this.cookieService.get('JWT-token')}
    })).pipe(
      map((response: AxiosResponse) => response.data)
    )
  }

  // Eliminar un género musical por ID
  deleteGeneroMusicalById(id: number): Observable<GeneroMusical> {
    return from(axios.delete(this.apiUrl + id, {
      headers: {'jwt-token': this.cookieService.get('JWT-token')}
    })).pipe(
      map((response: AxiosResponse) => response.data)
    )
  }
}
