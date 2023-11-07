export class CreateAccountModel{
  nombreUsuario:string;
  correo:string;
  contrasena:string;

  constructor(nombreUsuario:string, correo:string, contrasena:string) {
    this.nombreUsuario = nombreUsuario;
    this.correo = correo;
    this.contrasena = contrasena;
  }
}
