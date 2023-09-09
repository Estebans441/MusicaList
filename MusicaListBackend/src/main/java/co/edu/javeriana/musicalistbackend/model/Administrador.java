package co.edu.javeriana.musicalistbackend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.LinkedHashSet;
import java.util.Set;

@Setter
@Getter
@Entity
@Table(name = "administrador")
@PrimaryKeyJoinColumn(name = "cuenta_id")
public class Administrador extends Cuenta {
    @JsonManagedReference
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "administrador_id")
    private Set<Cancion> canciones = new LinkedHashSet<>();

    @JsonManagedReference
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

    @Override
    public void setContrasena(String contrasena) {
        this.contrasena = this.hashContrasena(contrasena);
    }
}