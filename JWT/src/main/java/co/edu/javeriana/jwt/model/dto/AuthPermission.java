package co.edu.javeriana.jwt.model.dto;

import lombok.Generated;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AuthPermission {
    Integer uId;
    String role;

    public AuthPermission(Integer uId, String role) {
        this.uId = uId;
        this.role = role;
    }
}
