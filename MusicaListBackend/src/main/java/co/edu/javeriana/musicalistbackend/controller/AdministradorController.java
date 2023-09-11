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
        return administradorRepository.save(administrador);
    }

    // Retrieve -> GET
    @GetMapping("/all")
    public List<Administrador> getAdministradores() {
        return administradorRepository.findAll();
    }

    @GetMapping("/{id}")
    public Administrador getAdministradorId(@PathVariable Integer id) {
        return administradorRepository.findById(id).orElse(null);
    }

    // Update -> PUT
    @PutMapping("/actualizar/{id}")
    public Administrador actualizarAdministrador(@PathVariable Integer id, @RequestBody Administrador administrador) {
        Optional<Administrador> administradorOptional = administradorRepository.findById(id);
        if (administradorOptional.isPresent()){
            administrador.setIdCuenta(id);
            administrador.setActivada(administradorOptional.get().getActivada());
            return administradorRepository.save(administrador);
        }
        return null;
    }

    // Delete -> DELETE
    @DeleteMapping("/eliminar/{id}")
    public Boolean borrarId(@PathVariable Integer id) {
        administradorRepository.deleteById(id);
        return true;
    }

}
