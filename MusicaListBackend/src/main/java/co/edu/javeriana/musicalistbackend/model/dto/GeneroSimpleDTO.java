package co.edu.javeriana.musicalistbackend.model.dto;

import co.edu.javeriana.musicalistbackend.model.entity.GeneroMusical;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GeneroSimpleDTO {
    private Integer idGenero;
    private String nombreGenero;
    private String descripcion;

    public GeneroSimpleDTO() {
        // Constructor vacío
    }

    public GeneroSimpleDTO(GeneroMusical generoMusical) {
        this.idGenero = generoMusical.getIdGenero();
        this.nombreGenero = generoMusical.getNombreGenero();
        this.descripcion = generoMusical.getDescripcion();
    }
}
