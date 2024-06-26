package co.edu.javeriana.jwt.model.dto;

import co.edu.javeriana.jwt.model.entity.Cuenta;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CuentaDTO {
    private Integer idCuenta;
    private String nombreUsuario;
    private String correo;
    private String role;


    public CuentaDTO(Cuenta cuenta, String role) {
        this.idCuenta = cuenta.getIdCuenta();
        this.nombreUsuario = cuenta.getNombreUsuario();
        this.correo = cuenta.getCorreo();
        this.role = role;
    }
}
