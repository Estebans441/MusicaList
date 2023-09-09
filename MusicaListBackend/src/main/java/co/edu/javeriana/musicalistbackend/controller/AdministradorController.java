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
    @GetMapping(value = "/crear")
    public Administrador crearAdministrador(@RequestBody Administrador administrador){
        return administradorRepository.save(administrador);
    }

    // Retrieve -> GET
    @GetMapping("/all")
    public List<Administrador> getAdministradores(){
        return administradorRepository.findAll();
    }

    @GetMapping("/{id}")
    public Administrador getAdministradorId(@PathVariable Integer id){
        Administrador administrador = new Administrador();
        Optional<Administrador> administradorOptional = administradorRepository.findById(id);
        if(administradorOptional.isPresent())
            administrador = administradorOptional.get();
        return administrador;
    }

    // Update -> PUT
    @PutMapping("/actualizar/{id}")
    public Administrador actualizarAdministrador(@PathVariable Integer id, @RequestBody Administrador administrador){
        Administrador administradorEditado = new Administrador();
        Optional<Administrador> administradorOptional = administradorRepository.findById(id);
        if(administradorOptional.isPresent()){
            administradorEditado = administradorOptional.get();
            administradorEditado.setNombreUsuario(administrador.getNombreUsuario());
            administradorEditado.setCorreo(administrador.getCorreo());
            administradorEditado.setContrasena(administrador.getContrasena());
        }
        return administradorRepository.save(administradorEditado);
    }

    // Delete -> DELETE
    @DeleteMapping("/eliminar/{id}")
    public Boolean borrarId(@PathVariable Integer id){
        administradorRepository.deleteById(id);
        return true;
    }

}
