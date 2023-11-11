export class Cuenta {
  idCuenta: number;
  nombreUsuario: string;
  correo: string;
  role: string;

  // Add the constructor method
  constructor(idCuenta: number, nombreUsuario: string, correo: string, role: string) {
    this.idCuenta = idCuenta;
    this.nombreUsuario = nombreUsuario;
    this.correo = correo;
    this.role = role;
  }
}
