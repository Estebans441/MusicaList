import {inject, Injectable} from '@angular/core';
import axios, {AxiosResponse} from 'axios';
import {Cancion} from "../models/entities/cancion.model";
import {from, Observable} from "rxjs";
import {map} from "rxjs/operators";
import {CookieService} from "ngx-cookie-service";

@Injectable(
  {
    providedIn: 'root'
  }
)

export class CancionService {
  private apiUrl: string = "http://localhost:8080/musicalist/api/canciones/";
  private cookieService = inject(CookieService)

  // Crear una cancion.
  createCancion(cancion: Cancion): Observable<Cancion> {
    return from(axios.post(this.apiUrl, cancion, {
      headers: {'jwt-token': this.cookieService.get('JWT-token')}
    })).pipe(
      map((response: AxiosResponse) => response.data),
    )
  }

  // Obtener cancion por nombre similar
  getCancionByNombre(nombre: String): Observable<Cancion[]> {
    return from(axios.get(this.apiUrl + "name-artist/" + nombre)).pipe(
      map((response: AxiosResponse) => response.data),
    )
  }

  // Actualizar una cancion por ID.
  updateCancionById(id: number, cancion: Cancion): Observable<Cancion> {
    return from(axios.put(this.apiUrl + id, cancion, {
      headers: {'jwt-token': this.cookieService.get('JWT-token')}
    })).pipe(
      map((response: AxiosResponse) => response.data),
    )
  }

  // Eliminar una cancion por ID
  deleteCancionById(id: number): Observable<Cancion> {
    return from(axios.delete(this.apiUrl + id, {
      headers: {'jwt-token': this.cookieService.get('JWT-token')}
    })).pipe(
      map((response: AxiosResponse) => response.data)
    )
  }
}
