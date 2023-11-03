package co.edu.javeriana.musicalistbackend.model.dto;

import co.edu.javeriana.musicalistbackend.model.entity.Cancion;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CancionSimpleDTO {
    private Integer idCancion;
    private String nombre;
    private String artista;
    private Integer duracionSeg;
    private Integer numeroVotos;

    public CancionSimpleDTO() {
        // Constructor vacío
    }

    public CancionSimpleDTO(Cancion cancion) {
        this.idCancion = cancion.getIdCancion();
        this.nombre = cancion.getNombre();
        this.artista = cancion.getArtista();
        this.duracionSeg = cancion.getDuracionSeg();
        this.numeroVotos = cancion.getVotos().size();
    }
}
