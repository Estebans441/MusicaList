import {Injectable} from '@angular/core';
import axios, {AxiosResponse} from 'axios';
import {Administrador} from "../models/entities/administrador.model";
import {from, Observable, Subject, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {CreateAccountModel} from "../models/dto/create-account.model";

@Injectable(
  {
    providedIn: 'root'
  }
)

export class AdministradorService {
  private apiUrl: string = "http://localhost:8080/musicalist/api/administradores/";
  public administrador: Administrador;
  public administrador$: Subject<Administrador>

  constructor() {
    this.administrador = new Administrador(-1, false, "", "");
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
  public obtenerAdministradorPorId(id: number): Observable<Administrador> {
    return from(axios.get<Administrador>(this.apiUrl + id))
      .pipe(
        map((response: AxiosResponse<Administrador>) => response.data),
        catchError((error) => throwError(error))
      );
  }
}
