import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {GeneroMusical} from "../../models/generoMusical.model";

@Component({
  selector: 'app-admin-add-genre',
  templateUrl: './admin-add-genre.component.html',
  styleUrls: ['./admin-add-genre.component.css']
})
export class AdminAddGenreComponent {
  genero: GeneroMusical;

  constructor(public dialogRef: MatDialogRef<AdminAddGenreComponent>) {
    this.genero = new GeneroMusical(-1, "", "", [])
  }

  onConfirm(): void {
    if(this.validateForm())
      this.dialogRef.close({genero: this.genero});
  }

  onCancel(): void {
    this.dialogRef.close(); // Cierra el diálogo sin enviar datos
  }

  validateForm(){
    return this.genero.nombreGenero != "" && this.genero.descripcion != ""
  }
}
