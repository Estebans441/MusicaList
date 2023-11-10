import {Injectable} from '@angular/core';
import axios, {AxiosResponse} from 'axios';
import {Cuenta} from "../models/entities/cuenta.model";
import {from, Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {Login} from "../models/dto/login.model";
import {HashService} from "./hash.service";
import {AuthDTO} from "../models/dto/auth.model";

@Injectable({
  providedIn: 'root'
})

export class CuentaService {
  constructor() {
  }

  private apiUrl = "http://localhost:8082/public/";

  // Autenticar cuenta con el Login.
  getCuentaLogin(usuarioCorreo: string, contrasena: string): Observable<AuthDTO> {
    const queryParams = `correo=${usuarioCorreo}&contrasena=${contrasena}`;
    return from(
      axios
        .post<AuthDTO>(`${this.apiUrl}autenticacion-usuario?${queryParams}`)
        .then((response: AxiosResponse<AuthDTO>) => response.data)
    ).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }
}
