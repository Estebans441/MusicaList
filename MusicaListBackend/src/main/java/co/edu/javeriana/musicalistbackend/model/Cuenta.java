package co.edu.javeriana.musicalistbackend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

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

    public Boolean coincide(String nuevaContrasena){
        return (nuevaContrasena.equals(this.getContrasena()));
    }

    public Boolean autenticar(String contrasena){
        return this.contrasena.equals(contrasena);
    }
}