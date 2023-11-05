package co.edu.javeriana.jwt.model.dto;

import co.edu.javeriana.jwt.model.entity.Cuenta;
import lombok.Generated;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AuthPermission {
    String role;
    CuentaDTO cuenta;

    public AuthPermission(String role, CuentaDTO cuenta) {
        this.role = role;
        this.cuenta = cuenta;
    }
}
