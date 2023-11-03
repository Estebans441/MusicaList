package co.edu.javeriana.jwt.controller;

import co.edu.javeriana.jwt.model.dto.AuthPermission;
import co.edu.javeriana.jwt.model.entity.Cuenta;
import co.edu.javeriana.jwt.repository.AdministradorRepository;
import co.edu.javeriana.jwt.repository.CuentaRepository;
import co.edu.javeriana.jwt.security.JWTFiltroAutorizacion;
import co.edu.javeriana.jwt.security.JWTProveedorToken;
import co.edu.javeriana.jwt.security.JWTToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<JWTToken> autenticar(
            @RequestParam(required = false) String correo,
            @RequestParam(required = false) String contrasena) {

        // Buscamos una cuenta en función del correo proporcionado
        Optional<Cuenta> cuentaOptional = cuentaRepository.findByNombreUsuarioOrCorreo(correo, correo);

        if (cuentaOptional.isPresent() && cuentaOptional.get().autenticar(contrasena)) {
            // Si la cuenta existe y la contraseña coincide, generamos un token JWT
            JWTProveedorToken jwtProveedorToken = new JWTProveedorToken();
            Integer idCuenta = cuentaOptional.get().getIdCuenta();

            // Obtenemos el rol (Admin o User) del usuario
            String role = getRole(idCuenta);

            // Generamos el token JWT y creamos un objeto AuthPermission
            String token = jwtProveedorToken.generateToken(cuentaOptional.get(), role);
            AuthPermission authPermission = new AuthPermission(idCuenta, role);

            // Devolvemos una respuesta exitosa con el token y el objeto AuthPermission
            return ResponseEntity.ok(new JWTToken(token, JWTFiltroAutorizacion.PREFIX, authPermission));
        }

        // Si no se encuentra una cuenta o la autenticación falla, devolvemos una respuesta 404
        return ResponseEntity.notFound().build();
    }

    private String getRole(Integer id) {
        return administradorRepository.findById(id).isPresent() ? "Admin" : "User";
    }

}