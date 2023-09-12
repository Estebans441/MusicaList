package co.edu.javeriana.musicalistbackend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.LinkedHashSet;
import java.util.Set;

@Setter
@Getter
@Entity
@Table(name = "votante")
@PrimaryKeyJoinColumn(name = "cuenta_id")
public class Votante extends Cuenta {
    @ManyToMany
    @JoinTable(name = "votos_cancion",
            joinColumns = @JoinColumn(name = "votante_cuenta_id"),
            inverseJoinColumns = @JoinColumn(name = "cancion_id_cancion"))
    private Set<Cancion> cancionesVotadas = new LinkedHashSet<>();


    public Votante() {
        super();
    }

    public Votante(String nombreUsuario, String correo, String contrasena){
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