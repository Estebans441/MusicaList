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
  public administrador: Cuenta;
  public administrador$: Subject<Cuenta>

  constructor() {
    this.administrador = new Cuenta(-1, "", "", false);
    this.administrador$ = new Subject()
  }

  actualizarAdministrador(id: number) {
    this.obtenerAdministradorPorId(id).subscribe(admin => {
      this.administrador = admin
      this.administrador$.next(this.administrador)
    })
  }

  getAdministrador$() {
    return this.administrador$.asObservable()
  }

  // Crear Administrador
  public crearAdministrador(administrador: CreateAccountModel): Observable<CreateAccountModel> {
    return from(axios.post<CreateAccountModel>(this.apiUrl, administrador))
      .pipe(
        map((response: AxiosResponse<CreateAccountModel>) => response.data),
        catchError((error) => throwError(error))
      );
  }

  // Obtener Administrador por id
  public obtenerAdministradorPorId(id: number): Observable<Cuenta> {
    return from(axios.get<Cuenta>(this.apiUrl + id))
      .pipe(
        map((response: AxiosResponse<Cuenta>) => response.data),
        catchError((error) => throwError(error))
      );
  }
}
