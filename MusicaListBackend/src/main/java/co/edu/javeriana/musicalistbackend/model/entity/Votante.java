package co.edu.javeriana.musicalistbackend.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
    @JsonIgnore
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
        this.contrasena = contrasena;
        this.activada = false;
    }

    public void votarCancion(Cancion cancion){
        this.cancionesVotadas.add(cancion);
    }

    public void eliminarVotoCancion(Cancion cancion){
        this.cancionesVotadas.remove(cancion);
    }
}