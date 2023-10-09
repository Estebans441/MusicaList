import {Component, inject, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {VotanteService} from "../services/votante.service";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {Observable} from "rxjs";
import {map, shareReplay} from "rxjs/operators";

@Component({
  selector: 'app-genres-vot',
  templateUrl: './main-vot.component.html',
  styleUrls: ['./main-vot.component.css']
})
export class MainVotComponent implements OnInit {
  private breakpointObserver = inject(BreakpointObserver);

  constructor(public votanteService: VotanteService, private router: Router) {
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  ngOnInit(): void {

  }
}
