export class Cuenta{
    idCuenta : number;
    nombreUsuario : string;
    correo : string;
    contrasena : string;
    activada : boolean;
    
    // Add the constructor method
    constructor(idCuenta : number, nombreUsuario : string, correo : string, contrasena : string, activada : boolean){
        this.idCuenta = idCuenta;
        this.nombreUsuario = nombreUsuario;
        this.correo = correo;
        this.contrasena = contrasena;
        this.activada = activada;
    }
}
