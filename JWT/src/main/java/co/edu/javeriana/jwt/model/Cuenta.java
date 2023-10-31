package co.edu.javeriana.jwt.model;

import javax.persistence.*;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name = "cuenta")
@Inheritance(strategy = InheritanceType.JOINED)
public class Cuenta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected Integer idCuenta;

    protected String nombreUsuario;
    protected String correo;
    protected String contrasena;
    protected Boolean activada;

    public Cuenta() {
        this.idCuenta = -1;
        this.nombreUsuario = "";
        this.correo = "";
        this.contrasena = "";
        this.activada = false;
    }

    public Boolean coincide(String nuevaContrasena) {
        return (nuevaContrasena.equals(this.getContrasena()));
    }

    public Boolean autenticar(String contrasena) {
        return this.contrasena.equals(contrasena);
    }
}