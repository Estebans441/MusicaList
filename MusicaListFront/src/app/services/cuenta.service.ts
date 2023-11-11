import {inject, Injectable} from '@angular/core';
import axios, {AxiosResponse} from 'axios';
import {Cuenta} from "../models/entities/cuenta.model";
import {from, Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {Login} from "../models/dto/login.model";
import {HashService} from "./hash.service";
import {AuthDTO} from "../models/dto/auth.model";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})

export class CuentaService {
  private authApiUrl = "http://localhost:8082/public/";
  private apiUrl = "http://localhost:8080/musicalist/api/cuentas/";
  private cookieService = inject(CookieService)

  // Autenticar cuenta con el Login.
  getCuentaLogin(usuarioCorreo: string, contrasena: string): Observable<AuthDTO> {
    const queryParams = `correo=${usuarioCorreo}&contrasena=${contrasena}`;
    return from(
      axios
        .post<AuthDTO>(`${this.authApiUrl}autenticacion-usuario?${queryParams}`)
        .then((response: AxiosResponse<AuthDTO>) => response.data)
    ).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  getCuenta(): Observable<Cuenta> {
    return from(axios.get(this.apiUrl, {headers: {"jwt-token": this.cookieService.get("JWT-token")}})).pipe(
      map((response: AxiosResponse) => response.data),
    )
  }
}
