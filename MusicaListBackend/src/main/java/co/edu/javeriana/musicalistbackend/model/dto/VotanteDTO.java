package co.edu.javeriana.musicalistbackend.model.dto;

import co.edu.javeriana.musicalistbackend.model.entity.Votante;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class VotanteDTO {
    private Integer idCuenta;
    private String nombreUsuario;
    private String correo;
    private String contrasena;
    private Boolean activada;
    private List<CancionSimpleDTO> cancionesVotadas;

    public VotanteDTO() {
        // Constructor vacío
    }

    public VotanteDTO(Votante votante) {
        this.idCuenta = votante.getIdCuenta();
        this.nombreUsuario = votante.getNombreUsuario();
        this.correo = votante.getCorreo();
        this.contrasena = votante.getContrasena();
        this.activada = votante.getActivada();
        this.cancionesVotadas = votante.getCancionesVotadas().stream().map(CancionSimpleDTO::new).toList();
    }
}
