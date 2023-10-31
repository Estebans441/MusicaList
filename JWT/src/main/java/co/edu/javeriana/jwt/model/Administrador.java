package co.edu.javeriana.jwt.model;

import jakarta.persistence.Entity;
import jakarta.persistence.PrimaryKeyJoinColumn;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name = "administrador")
@PrimaryKeyJoinColumn(name = "cuenta_id")
public class Administrador extends Cuenta {

    public Administrador() {
        super();
    }

    public Administrador(String nombreUsuario, String correo, String contrasena) {
        this.nombreUsuario = nombreUsuario;
        this.correo = correo;
        this.contrasena = this.hashContrasena(contrasena);
        this.activada = false;
    }

    @Override
    public void setContrasena(String contrasena) {
        this.contrasena = this.hashContrasena(contrasena);
    }
}