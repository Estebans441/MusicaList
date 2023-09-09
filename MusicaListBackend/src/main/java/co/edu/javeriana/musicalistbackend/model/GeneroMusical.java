package co.edu.javeriana.musicalistbackend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.LinkedHashSet;
import java.util.Set;

@Setter
@Getter
@Entity
@Table(name = "genero_musical")
public class GeneroMusical {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idGenero;

    private String nombreGenero;
    private String descripcion;

    @JsonBackReference("genero_musical_id")
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "genero_musical_id")
    private Set<Cancion> canciones = new LinkedHashSet<>();

    public GeneroMusical(){
        this.descripcion = "";
        this.nombreGenero = "";
    }

    public GeneroMusical(String nombre, String descripcion){
        this.descripcion = descripcion;
        this.nombreGenero = nombre;
    }
}