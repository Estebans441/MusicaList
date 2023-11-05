package co.edu.javeriana.jwt.model.dto;

import co.edu.javeriana.jwt.model.entity.Cuenta;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CuentaDTO {
    protected Integer idCuenta;
    protected String nombreUsuario;
    protected String correo;

    public CuentaDTO(Cuenta cuenta) {
        this.idCuenta = cuenta.getIdCuenta();
        this.nombreUsuario = cuenta.getNombreUsuario();
        this.correo = cuenta.getCorreo();
    }
}
