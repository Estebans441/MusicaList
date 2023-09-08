package co.edu.javeriana.musicalist.model;

import jakarta.persistence.*;

import java.util.LinkedHashSet;
import java.util.Set;

import lombok.Getter;
import lombok.Setter;

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

    public Votante(){
        this.nombreUsuario = "";
        this.correo = "";
        this.contrasena = "";
        this.activada = false;
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