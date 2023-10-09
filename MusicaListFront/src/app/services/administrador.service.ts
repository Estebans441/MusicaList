import {Injectable} from '@angular/core';
import axios, {AxiosResponse} from 'axios';
import{Administrador} from "../models/administrador.model";
import {from, Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";

@Injectable(
  {
    providedIn: 'root'
  }
)

export class AdministradorService{
  private apiUrl: string = "http://localhost:8080/musicalist/api/administrador/";
  public administrador : Administrador = new Administrador(-1, false, "", "", "");
  // Crear Administrador
    public crearAdministrador(administrador: Administrador): Observable<Administrador>{
        return from(axios.post<Administrador>(this.apiUrl + "crear", administrador))
        .pipe(
            map((response: AxiosResponse<Administrador>) => response.data),
            catchError((error) => throwError(error))
        );
    }

    // Obtener Administrador por id
    public obtenerAdministradorPorId(id: number): Observable<Administrador>{
        return from(axios.get<Administrador>(this.apiUrl + "id/ "+ id))
        .pipe(
            map((response: AxiosResponse<Administrador>) => response.data),
            catchError((error) => throwError(error))
        );
    }

  public obtenerAdministradorPorNombre(nombre: string): Observable<Administrador>{
    return from(axios.get<Administrador>(this.apiUrl + nombre))
      .pipe(
        map((response: AxiosResponse<Administrador>) => response.data),
        catchError((error) => throwError(error))
      );
  }

    // Obtener todos los administradores
    public obtenerTodosLosAdministradores(): Observable<Administrador[]>{
        return from(axios.get<Administrador[]>(this.apiUrl + "all"))
        .pipe(
            map((response: AxiosResponse<Administrador[]>) => response.data),
            catchError((error) => throwError(error))
        );
    }
}
