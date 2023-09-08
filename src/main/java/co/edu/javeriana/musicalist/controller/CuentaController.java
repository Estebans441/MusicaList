package co.edu.javeriana.musicalist.controller;

import co.edu.javeriana.musicalist.model.Administrador;
import co.edu.javeriana.musicalist.repository.AdministradorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CuentaController {
    @Autowired
    AdministradorRepository administradorRepository;

    @CrossOrigin
    @GetMapping(value = "/crear")
    void crearAdministrador(){
        Administrador administrador = new Administrador("estebans441","estebans441@gmail.com","ESA1234");
        administradorRepository.save(administrador);
    }
}
