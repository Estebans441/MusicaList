import {Injectable} from '@angular/core';
import axios, {AxiosResponse} from 'axios';
import {Cuenta} from "../models/cuenta.model";
import {from, Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {Login} from "../models/login.model";

@Injectable({
  providedIn: 'root'
})

export class CuentaService {
  constructor() {
  }

  private apiUrl = "http://localhost:8080/musicalist/api/cuenta/";

  // Autenticar cuenta con el Login.
  getCuentaLogin(login:Login): Observable<boolean> {
    const formData = {
      usuarioCorreo:login.usuarioCorreo,
      contrasena:login.contrasena
    };
    return from(
      axios
        .post<boolean>(this.apiUrl + "autenticar",formData, {
          headers: { "Content-Type": "application/json" }
        })
        .then((response: AxiosResponse<boolean>) => response.data)
    ).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  // Actualizar cuenta por ID.
  updateCuentaById(id: number, cuenta: Cuenta): Observable<Cuenta> {
    return from(axios.put(this.apiUrl + "actualizar/" + id, cuenta)).pipe(
      map((response: AxiosResponse) => response.data),
      catchError((error: any) => throwError(error))
    );
  }

  // Actualizar contraseña de una cuenta por ID.
  updateCuentaPasswordById(id: number, cambioContrasena: CambioContrasena): Observable<Cuenta> {
    return from(axios.put(this.apiUrl + "actualizar-c/" + id, cambioContrasena)).pipe(
      map((response: AxiosResponse) => response.data),
      catchError((error: any) => throwError(error))
    );
  }

  // Eliminar cuenta por ID.
  deleteCuentaById(id: number): Observable<Cuenta> {
    return from(axios.delete(this.apiUrl + "eliminar/" + id)).pipe(
      map((response: AxiosResponse) => response.data),
      catchError((error: any) => throwError(error))
    );
  }


}

// Clases DTO en el front-end asemejadas con las estipuladas con Spring Boot.
export class CambioContrasena {
  anteriorContrasena: string;
  nuevaContrasena: string;

  constructor(anteriorContrasena: string, nuevaContrasena: string) {
    this.anteriorContrasena = anteriorContrasena;
    this.nuevaContrasena = nuevaContrasena;
  }
}
