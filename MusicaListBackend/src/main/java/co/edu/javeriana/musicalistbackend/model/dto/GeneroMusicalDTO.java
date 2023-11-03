package co.edu.javeriana.musicalistbackend.model.dto;

import co.edu.javeriana.musicalistbackend.model.entity.GeneroMusical;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.Set;

@Getter
@Setter
public class GeneroMusicalDTO {
    private Integer idGenero;
    private String nombreGenero;
    private String descripcion;
    private List<CancionSimpleDTO> canciones;

    public GeneroMusicalDTO() {
        // Constructor vacío
    }

    public GeneroMusicalDTO(GeneroMusical generoMusical) {
        this.idGenero = generoMusical.getIdGenero();
        this.nombreGenero = generoMusical.getNombreGenero();
        this.descripcion = generoMusical.getDescripcion();
        this.canciones = generoMusical.getCanciones().stream().map(CancionSimpleDTO::new).toList();
    }
}
