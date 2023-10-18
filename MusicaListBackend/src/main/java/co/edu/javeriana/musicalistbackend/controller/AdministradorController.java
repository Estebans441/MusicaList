package co.edu.javeriana.musicalistbackend.controller;

import co.edu.javeriana.musicalistbackend.model.Administrador;
import co.edu.javeriana.musicalistbackend.repository.AdministradorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/musicalist/api/administrador")
public class AdministradorController {
    @Autowired
    AdministradorRepository administradorRepository;

    // Create -> POST
    @CrossOrigin
    @PostMapping(value = "/crear")
    public Administrador crearAdministrador(@RequestBody Administrador administrador) {
        Optional<Administrador> optionalAdministrador = administradorRepository.findByNombreUsuarioOrCorreo(administrador.getNombreUsuario(), administrador.getCorreo());
        if(optionalAdministrador.isPresent()){
            return new Administrador();
        }
        return administradorRepository.save(administrador);
    }

    // Retrieve -> GET
    @CrossOrigin
    @GetMapping("/all")
    public List<Administrador> getAdministradores() {
        return administradorRepository.findAll();
    }

    @CrossOrigin
    @GetMapping("/id/{id}")
    public Administrador getAdministradorId(@PathVariable Integer id) {
        return administradorRepository.findById(id).orElse(new Administrador());
    }

    @CrossOrigin
    @GetMapping("/{nombre}")
    public Administrador getAdministradorId(@PathVariable String nombre) {
        return administradorRepository.findByNombreUsuarioOrCorreo(nombre, nombre).orElse(null);
    }
}
