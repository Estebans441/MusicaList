package co.edu.javeriana.jwt.controller;

import co.edu.javeriana.jwt.model.Cuenta;
import co.edu.javeriana.jwt.repository.AdministradorRepository;
import co.edu.javeriana.jwt.repository.CuentaRepository;
import co.edu.javeriana.jwt.security.JWTFiltroAutorizacion;
import co.edu.javeriana.jwt.security.JWTProveedorToken;
import co.edu.javeriana.jwt.security.JWTToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class AutenticacionController {

    @Autowired
    CuentaRepository cuentaRepository;

    @Autowired
    AdministradorRepository administradorRepository;

    @PostMapping(value = "/public/autenticacion-usuario", produces = MediaType.APPLICATION_JSON_VALUE)
    public JWTToken autenticar(@RequestParam(required = false) String correo, @RequestParam(required = false) String contrasena) {
        System.out.println("----------1<<<<<<<>>>>>><-------");
        System.out.println(correo + " --- " + contrasena);
        Optional<Cuenta> cuentaOptional = cuentaRepository.findByNombreUsuarioOrCorreo(correo, correo);
        if (cuentaOptional.isPresent() && cuentaOptional.get().autenticar(contrasena)) {
            JWTProveedorToken jwtProveedorToken = new JWTProveedorToken();
            String role = getRole(cuentaOptional.get().getIdCuenta());
            String token = jwtProveedorToken.generateToken(cuentaOptional.get(), role);
            return new JWTToken(token, JWTFiltroAutorizacion.PREFIX);
        }
        return new JWTToken("", "");
    }

    private String getRole(Integer id) {
        return administradorRepository.findById(id).isPresent() ? "Admin" : "User";
    }
}