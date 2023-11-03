import {Component, inject, OnInit} from '@angular/core';
import {AdministradorService} from "../../services/administrador.service";
import {Router} from "@angular/router";
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';

@Component({
  selector: 'app-genres-admin',
  templateUrl: './main-admin.component.html',
  styleUrls: ['./main-admin.component.css']
})
export class MainAdminComponent implements OnInit {
  private breakpointObserver = inject(BreakpointObserver);

  constructor(public adminService: AdministradorService, private router: Router) {
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  ngOnInit(): void {

  }
}
