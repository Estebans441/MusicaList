import {Component, Inject} from '@angular/core';
import {GeneroMusical} from "../../../../models/generoMusical.model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-admin-edit-genre',
  templateUrl: './admin-edit-genre.component.html',
  styleUrls: ['./admin-edit-genre.component.css']
})
export class AdminEditGenreComponent {
  genero: GeneroMusical;

  constructor(public dialogRef: MatDialogRef<AdminEditGenreComponent>, @Inject(MAT_DIALOG_DATA) public data: {name: string, desc: string}) {
    this.genero = new GeneroMusical(-1, data.name, data.desc, [], 0)
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
