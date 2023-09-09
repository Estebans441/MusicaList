package co.edu.javeriana.musicalistbackend.controller;

import co.edu.javeriana.musicalistbackend.model.Administrador;
import co.edu.javeriana.musicalistbackend.repository.AdministradorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CuentaController {
    @Autowired
    AdministradorRepository administradorRepository;

    @CrossOrigin
    @GetMapping(value = "/crear")
    void crearAdministrador(){
        Administrador administrador = new Administrador("camorag","camorag@gmail.com","calamardo-loves-L10NEL");
        administradorRepository.save(administrador);
    }
}
