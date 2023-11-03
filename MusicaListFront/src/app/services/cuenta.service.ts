import {Injectable} from '@angular/core';
import axios, {AxiosResponse} from 'axios';
import {Cuenta} from "../models/entities/cuenta.model";
import {from, Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {Login} from "../models/dto/login.model";
import {HashService} from "./hash.service";

@Injectable({
  providedIn: 'root'
})

export class CuentaService {
  constructor(private hashService:HashService) {
  }

  private apiUrl = "http://localhost:8080/musicalist/api/cuentas/";

  // Autenticar cuenta con el Login.
  getCuentaLogin(login:Login): Observable<number> {
    const queryParams = `correo=${login.usuarioCorreo}&contrasena=${login.contrasena}`;
    return from(
      axios
        .post<number>(`${this.apiUrl}auth?${queryParams}`)
        .then((response: AxiosResponse<number>) => response.data)
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
