package co.edu.javeriana.musicalist.model;

import jakarta.persistence.*;

import java.util.LinkedHashSet;
import java.util.Set;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name = "administrador")
@PrimaryKeyJoinColumn(name = "cuenta_id")
public class Administrador extends Cuenta {
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "administrador_id")
    private Set<Cancion> canciones = new LinkedHashSet<>();

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "administrador_id")
    private Set<GeneroMusical> generos = new LinkedHashSet<>();

    public Administrador(){
        this.nombreUsuario = "";
        this.correo = "";
        this.contrasena = "";
        this.activada = false;
    }

    public Administrador(String nombreUsuario, String correo, String contrasena){
        this.nombreUsuario = nombreUsuario;
        this.correo = correo;
        this.contrasena = this.hashContrasena(contrasena);
        this.activada = false;
    }
}