export class Cuenta{
    idCuenta : number;
    nombreUsuario : string;
    correo : string;
    activada : boolean;

    // Add the constructor method
    constructor(idCuenta : number, nombreUsuario : string, correo : string, activada : boolean){
        this.idCuenta = idCuenta;
        this.nombreUsuario = nombreUsuario;
        this.correo = correo;
        this.activada = activada;
    }
}
