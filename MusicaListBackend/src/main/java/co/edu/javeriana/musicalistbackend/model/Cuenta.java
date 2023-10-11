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
        return (this.hashContrasena(nuevaContrasena).equals(this.getContrasena()));
    }

    public Boolean autenticar(String contrasena){
        return this.contrasena.equals(this.hashContrasena(contrasena));
    }

    protected String hashContrasena(String contrasena){
        try{
            // Crear una instancia de MessageDigest para SHA-256
            MessageDigest digest = MessageDigest.getInstance("SHA-256");

            // Calcular el hash SHA-256
            byte[] hash = digest.digest(contrasena.getBytes(StandardCharsets.UTF_8));

            // Convertir el hash a una representación hexadecimal
            StringBuilder hexString = new StringBuilder();
            for (byte b : hash) {
                String hex = Integer.toHexString(0xff & b);
                if (hex.length() == 1) {
                    hexString.append('0');
                }
                hexString.append(hex);
            }
            return hexString.toString();
        }
        catch(NoSuchAlgorithmException e){
            return contrasena;
        }
    }
}