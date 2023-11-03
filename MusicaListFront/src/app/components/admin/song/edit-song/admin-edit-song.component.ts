import {Component, Inject} from '@angular/core';
import {GeneroMusical} from "../../../../models/entities/generoMusical.model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Cancion} from "../../../../models/entities/cancion.model";
import {GeneroMusicalService} from "../../../../services/generoMusical.service";

@Component({
  selector: 'app-admin-edit-song',
  templateUrl: './admin-edit-song.component.html',
  styleUrls: ['./admin-edit-song.component.css']
})
export class AdminEditSongComponent {
  cancion: Cancion;
  generos: GeneroMusical[] = []
  selected = ""

  constructor(public dialogRef: MatDialogRef<AdminEditSongComponent>, @Inject(MAT_DIALOG_DATA) public data: {
    cancion: Cancion,
    idGenero: number
  }, generoService: GeneroMusicalService) {
    this.cancion = data.cancion
    this.cancion.generoMusical = new GeneroMusical(-1,"","",[], 0)
    this.selected = data.idGenero.toString()
    generoService.getAllGenerosMusicales().subscribe(generos => {
      this.generos = generos
    })
  }

  onConfirm(): void {
    if (this.validateForm()) {
      this.cancion.generoMusical.idGenero = parseInt(this.selected)
      this.dialogRef.close({cancion: this.cancion});
    }
  }

  onCancel(): void {
    this.dialogRef.close(); // Cierra el diálogo sin enviar datos
  }

  validateForm() {
    return this.cancion.nombre != "" && this.cancion.artista != "" && this.cancion.duracionSeg != null
  }
}
