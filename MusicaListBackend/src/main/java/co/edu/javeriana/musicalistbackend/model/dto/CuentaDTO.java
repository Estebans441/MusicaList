package co.edu.javeriana.musicalistbackend.model.dto;


import co.edu.javeriana.musicalistbackend.model.entity.Cuenta;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CuentaDTO {
    private Integer idCuenta;
    private String nombreUsuario;
    private String correo;
    private String role;

    public CuentaDTO() {
    }

    public CuentaDTO(Cuenta cuenta) {
        this.idCuenta = cuenta.getIdCuenta();
        this.nombreUsuario = cuenta.getNombreUsuario();
        this.correo = cuenta.getCorreo();
    }
}
