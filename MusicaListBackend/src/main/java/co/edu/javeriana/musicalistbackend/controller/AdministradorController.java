package co.edu.javeriana.musicalistbackend.controller;

import co.edu.javeriana.musicalistbackend.model.entity.Administrador;
import co.edu.javeriana.musicalistbackend.repository.AdministradorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/musicalist/api/administradores/")
public class AdministradorController {
    @Autowired
    AdministradorRepository administradorRepository;

    // Create -> POST
    @CrossOrigin
    @PostMapping()
    public ResponseEntity<Administrador> crearAdministrador(@RequestBody Administrador administrador) {
        Optional<Administrador> optionalAdministrador = administradorRepository.findByNombreUsuarioOrCorreo(administrador.getNombreUsuario(), administrador.getCorreo());
        if (optionalAdministrador.isPresent()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(null);
        }
        Administrador savedAdministrador = administradorRepository.save(administrador);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedAdministrador);
    }

    // Retrieve -> GET
    @CrossOrigin
    @GetMapping()
    public ResponseEntity<List<Administrador>> getAdministradores() {
        List<Administrador> administradores = administradorRepository.findAll();
        return ResponseEntity.ok(administradores);
    }

    @CrossOrigin
    @GetMapping("{id}")
    public ResponseEntity<Administrador> getAdministradorId(@PathVariable Integer id) {
        Optional<Administrador> optionalAdministrador = administradorRepository.findById(id);
        return optionalAdministrador.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
}
