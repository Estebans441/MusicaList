import {Component, inject, OnInit} from '@angular/core';
import {AdministradorService} from "../services/administrador.service";
import {Router} from "@angular/router";
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {GeneroMusical} from "../models/generoMusical.model";
import {GeneroMusicalService} from "../services/generoMusical.service";

@Component({
  selector: 'app-genres-admin',
  templateUrl: './genres-admin.component.html',
  styleUrls: ['./genres-admin.component.css']
})
export class GenresAdminComponent implements OnInit {
  private breakpointObserver = inject(BreakpointObserver);
  generosMusicales: GeneroMusical[] = [];

  constructor(public adminService: AdministradorService, private router: Router, private generoMusicalService : GeneroMusicalService) {
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  ngOnInit(): void {
    this.generoMusicalService.getAllGenerosMusicales().subscribe(
      (generosMusicales: GeneroMusical[]) => {
        this.generosMusicales = generosMusicales;
      }
    );
  }
}
