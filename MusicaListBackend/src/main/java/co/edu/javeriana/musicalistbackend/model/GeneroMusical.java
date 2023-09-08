package co.edu.javeriana.musicalistbackend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.util.LinkedHashSet;
import java.util.Set;

@Setter
@Getter
@Entity
@Table(name = "genero_musical")
public class GeneroMusical {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String nombreGenero;
    private String descripcion;

    @ManyToOne(fetch = FetchType.LAZY)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "administrador_id")
    private Administrador administrador;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "genero_musical_id")
    private Set<Cancion> canciones = new LinkedHashSet<>();
}