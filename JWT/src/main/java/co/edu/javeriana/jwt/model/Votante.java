package co.edu.javeriana.jwt.model;

import javax.persistence.*;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name = "votante")
@PrimaryKeyJoinColumn(name = "cuenta_id")
public class Votante extends Cuenta {
    public Votante() {
        super();
    }

    public Votante(String nombreUsuario, String correo, String contrasena) {
        this.nombreUsuario = nombreUsuario;
        this.correo = correo;
        this.contrasena = contrasena;
        this.activada = false;
    }

    @Override
    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }
}