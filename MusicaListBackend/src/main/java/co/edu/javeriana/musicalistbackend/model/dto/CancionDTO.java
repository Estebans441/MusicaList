package co.edu.javeriana.musicalistbackend.model.dto;

import co.edu.javeriana.musicalistbackend.model.entity.Cancion;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CancionDTO {
    private Integer idCancion;
    private String nombre;
    private String artista;
    private Integer duracionSeg;
    private GeneroSimpleDTO generoMusical;
    private Integer numeroVotos;

    public CancionDTO() {
        // Constructor vacío
    }

    public CancionDTO(Cancion cancion) {
        this.idCancion = cancion.getIdCancion();
        this.nombre = cancion.getNombre();
        this.artista = cancion.getArtista();
        this.duracionSeg = cancion.getDuracionSeg();
        this.generoMusical = new GeneroSimpleDTO(cancion.getGeneroMusical());
        this.numeroVotos = cancion.getVotos().size();
    }
}
