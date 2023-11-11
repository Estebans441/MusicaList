import {inject, Injectable} from '@angular/core';
import axios, {AxiosResponse} from 'axios';
import {from, Observable, Subject, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {CreateAccountModel} from "../models/dto/create-account.model";
import {Cuenta} from "../models/entities/cuenta.model";
import {Cancion} from "../models/entities/cancion.model";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})

export class VotanteService {
  private apiUrl = "http://localhost:8080/musicalist/api/votantes/";
  private cookieService = inject(CookieService)

  // Crear votante
  createVotante(votante: CreateAccountModel): Observable<CreateAccountModel> {
    return from(axios.post(this.apiUrl, votante)).pipe(
      map((response: AxiosResponse<CreateAccountModel>) => response.data)
    )
  }

  // Obtener canciones votadas de un Votante
  getVotos(): Observable<Cancion[]> {
    return from(axios.get(this.apiUrl + "votos", {
      headers: {"jwt-token": this.cookieService.get("JWT-token")}
    })).pipe(
      map((response: AxiosResponse<Cancion[]>) => response.data),
    )
  }

  // Realizar voto teniendo id del votante e id de la canción
  realizarVoto(idCancion: number) {
    return from(axios.put(this.apiUrl + "votar/" + idCancion, null, {
      headers: {"jwt-token": this.cookieService.get("JWT-token")}
    }))
  }

  // Eliminar voto teniendo id del votante e id de la canción
  eliminarVoto(idCancion: number) {
    return from(axios.put(this.apiUrl + "eliminar-voto/" + idCancion, null, {
      headers: {"jwt-token": this.cookieService.get("JWT-token")}
    }))
  }
}
