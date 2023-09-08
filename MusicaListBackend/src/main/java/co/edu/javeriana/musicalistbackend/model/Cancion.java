package co.edu.javeriana.musicalistbackend.model;

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
@Table(name = "cancion")
public class Cancion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_cancion", nullable = false)
    private Integer id;

    private String nombre;
    private String artista;
    private Integer duracionSeg;

    @ManyToOne(fetch = FetchType.LAZY)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "administrador_id")
    private Administrador administrador;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "genero_musical_id", nullable = false)
    private GeneroMusical generoMusical;

    @ManyToMany
    @JoinTable(name = "votos_cancion",
            joinColumns = @JoinColumn(name = "cancion_id_cancion"),
            inverseJoinColumns = @JoinColumn(name = "votante_cuenta_id"))
    private Set<Votante> votos = new LinkedHashSet<>();
}