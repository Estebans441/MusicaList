import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {Cancion} from "../../models/cancion.model";
import {GeneroMusical} from "../../models/generoMusical.model";

@Component({
  selector: 'app-admin-add-song',
  templateUrl: './admin-add-song.component.html',
  styleUrls: ['./admin-add-song.component.css']
})
export class AdminAddSongComponent {
  cancion: Cancion

  constructor(public dialogRef: MatDialogRef<AdminAddSongComponent>) {
    this.cancion = new Cancion(-1, "", "", 1, new GeneroMusical(-1, "", "", []), 0)
  }
  onConfirm(): void {
    if(this.validateForm())
      this.dialogRef.close({cancion: this.cancion});
  }

  onCancel(): void {
    this.dialogRef.close(); // Cierra el diálogo sin enviar datos
  }

  validateForm(){
    return this.cancion.nombre != "" && this.cancion.artista != "" && this.cancion.duracionSeg != null
  }
}
