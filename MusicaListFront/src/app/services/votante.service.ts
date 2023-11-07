import {Injectable} from '@angular/core';
import axios, {AxiosResponse} from 'axios';
import {Votante} from "../models/entities/votante.model";
import {from, Observable, Subject, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {Administrador} from "../models/entities/administrador.model";
import {CreateAccountModel} from "../models/dto/create-account.model";

@Injectable({
  providedIn: 'root'
})

export class VotanteService {
  private apiUrl = "http://localhost:8080/musicalist/api/votantes/";
  public votante: Votante;
  public votante$: Subject<Votante>;

  constructor() {
    this.votante = new Votante(-1, false, "", "", [])
    this.votante$ = new Subject()
  }

  actualizarVotante(id: number) {
    this.getVotanteById(id).subscribe(votante => {
      this.votante = votante
      this.votante$.next(this.votante)
    })
  }

  getVotante$() {
    return this.votante$.asObservable()
  }

  // Crear votante
  createVotante(votante: CreateAccountModel): Observable<CreateAccountModel> {
    return from(axios.post(this.apiUrl, votante)).pipe(
      map((response: AxiosResponse<CreateAccountModel>) => response.data),
      catchError((error: any) => throwError(error))
    );
  }

  // Obtener votante por ID.
  getVotanteById(id: number): Observable<Votante> {
    return from(axios.get(this.apiUrl + id)).pipe(
      map((response: AxiosResponse) => response.data),
    ).pipe(
      catchError((error) => throwError(error))
    );
  }

  // Realizar voto teniendo id del votante e id de la canción
  realizarVoto(idVotante: number, idCancion: number) {
    let ret: Observable<boolean> = from(axios.put(this.apiUrl + "votar/" + idVotante + "-" + idCancion)).pipe(
      map((response: AxiosResponse) => response.data),
      catchError((error: any) => throwError(error))
    )
    ret.subscribe((response: boolean) => {
      if (response)
        this.actualizarVotante(this.votante.idCuenta)
    })
    return ret
  }

  // Eliminar voto teniendo id del votante e id de la canción
  eliminarVoto(idVotante: number, idCancion: number) {
    let ret: Observable<boolean> = from(axios.put(this.apiUrl + "eliminar-voto/" + idVotante + "-" + idCancion)).pipe(
      map((response: AxiosResponse) => response.data),
      catchError((error: any) => throwError(error))
    )
    ret.subscribe((response: boolean) => {
      if (response)
        this.actualizarVotante(this.votante.idCuenta)
    })
    return ret
  }
}
