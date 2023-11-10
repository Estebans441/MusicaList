import {Injectable} from '@angular/core';
import axios, {AxiosResponse} from 'axios';
import {from, Observable, Subject, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {CreateAccountModel} from "../models/dto/create-account.model";
import {Cuenta} from "../models/entities/cuenta.model";

@Injectable(
  {
    providedIn: 'root'
  }
)

export class AdministradorService {
  private apiUrl: string = "http://localhost:8080/musicalist/api/administradores/";

  // Crear Administrador
  public crearAdministrador(administrador: CreateAccountModel): Observable<CreateAccountModel> {
    return from(axios.post<CreateAccountModel>(this.apiUrl, administrador))
      .pipe(
        map((response: AxiosResponse<CreateAccountModel>) => response.data),
        catchError((error) => throwError(error))
      );
  }
}
