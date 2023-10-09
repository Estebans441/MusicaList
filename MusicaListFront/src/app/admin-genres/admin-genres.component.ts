import {Component, OnInit} from '@angular/core';
import {GeneroMusical} from "../models/generoMusical.model";
import {GeneroMusicalService} from "../services/generoMusical.service";

@Component({
  selector: 'app-admin-genres',
  templateUrl: './admin-genres.component.html',
  styleUrls: ['./admin-genres.component.css']
})
export class AdminGenresComponent implements OnInit{
  generosMusicales: GeneroMusical[] = [];

  constructor(private generoMusicalService : GeneroMusicalService) {
  }
  ngOnInit() {
    this.generoMusicalService.getAllGenerosMusicales().subscribe(
      (generosMusicales: GeneroMusical[]) => {
        this.generosMusicales = generosMusicales;
      }
    );
  }

}
