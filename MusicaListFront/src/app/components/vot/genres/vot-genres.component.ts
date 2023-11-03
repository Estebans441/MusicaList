import {Component} from '@angular/core';
import {GeneroMusical} from "../../../models/entities/generoMusical.model";
import {GeneroMusicalService} from "../../../services/generoMusical.service";

@Component({
  selector: 'app-vot-genres',
  templateUrl: './vot-genres.component.html',
  styleUrls: ['./vot-genres.component.css']
})
export class VotGenresComponent {
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
