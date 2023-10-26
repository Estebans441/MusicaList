package co.edu.javeriana.jwt.model;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AutenticacionController {


    @PostMapping(value = "/public/autenticacion-usuario", produces = MediaType.APPLICATION_JSON_VALUE)
    public JWTToken autenticar(@RequestParam(required = false) String correo, @RequestParam(required = false) String contrasena) {
        System.out.println("----------1<<<<<<<>>>>>><-------");
        System.out.println(correo + " --- " + contrasena);
        JWTProveedorToken jwtProveedorToken = new JWTProveedorToken();
        return new JWTToken(jwtProveedorToken.generateToken(correo), JWTFiltroAutorizacion.PREFIX);
    }
}