package co.edu.javeriana.jwt.security;

import co.edu.javeriana.jwt.model.Cuenta;
import co.edu.javeriana.jwt.repository.CuentaRepository;
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

    @PostMapping( value = "/public/autenticacion-usuario", produces = MediaType.APPLICATION_JSON_VALUE )
    public JWTToken autenticar( @RequestParam( required = false ) String correo, @RequestParam( required = false ) String contrasena ){
        System.out.println("----------1<<<<<<<>>>>>><-------");
        System.out.println(  correo + " --- " + contrasena);

        Optional<Cuenta> cuentaOptional = cuentaRepository.findByNombreUsuarioOrCorreo(correo, correo);
        if(cuentaOptional.isPresent() && cuentaOptional.get().autenticar(contrasena)){
            JWTProveedorToken jwtProveedorToken = new JWTProveedorToken();
            return  new JWTToken(jwtProveedorToken.generateToken(correo), JWTFiltroAutorizacion.PREFIX) ;
        };
        return null;
    }
}