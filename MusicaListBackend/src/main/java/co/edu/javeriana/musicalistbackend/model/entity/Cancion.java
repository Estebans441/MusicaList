package co.edu.javeriana.musicalistbackend.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@JsonIgnoreProperties({"votos"})
@Table(name = "cancion")
public class Cancion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_cancion", nullable = false)
    private Integer idCancion;

    private String nombre;
    private String artista;
    private Integer duracionSeg;

    @JsonIgnoreProperties("canciones")
    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "genero_musical_id")
    private GeneroMusical generoMusical;

    @ManyToMany
    @JoinTable(name = "votos_cancion",
            joinColumns = @JoinColumn(name = "cancion_id_cancion"),
            inverseJoinColumns = @JoinColumn(name = "votante_cuenta_id"))
    private Set<Votante> votos = new LinkedHashSet<>();

    @Transient
    private Integer numeroVotos;

    public Cancion(){
        this.nombre = "";
        this.generoMusical = new GeneroMusical();
    }

    public Cancion(String nombre, GeneroMusical genero){
        this.nombre = nombre;
        this.generoMusical = genero;
    }

    public Cancion(String nombre, String artista, Integer duracionSeg, GeneroMusical generoMusical) {
        this.nombre = nombre;
        this.artista = artista;
        this.duracionSeg = duracionSeg;
        this.generoMusical = generoMusical;
    }

    public Integer getNumeroVotos() {
        this.numeroVotos = getVotos().size();
        return numeroVotos;
    }
}