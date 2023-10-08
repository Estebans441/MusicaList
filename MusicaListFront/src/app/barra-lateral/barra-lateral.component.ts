import {Component, inject} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {GeneroMusical} from "../models/generoMusical.model";
import {GeneroMusicalService} from '../services/generoMusical.service';

@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrls: ['./barra-lateral.component.css']
})
export class BarraLateralComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  generosMusicales: GeneroMusical[] = [];

  constructor(private generoMusicalService: GeneroMusicalService) {
  }

  ngOnInit(): void {
    this.generoMusicalService.getAllGenerosMusicales().subscribe(
      (generosMusicales: GeneroMusical[]) => {
        this.generosMusicales = generosMusicales;
      }
    );
  }
}
