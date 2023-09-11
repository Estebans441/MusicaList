package co.edu.javeriana.musicalistbackend.controller;

import co.edu.javeriana.musicalistbackend.model.GeneroMusical;
import co.edu.javeriana.musicalistbackend.repository.AdministradorRepository;
import co.edu.javeriana.musicalistbackend.repository.CancionRepository;
import co.edu.javeriana.musicalistbackend.repository.GeneroMusicalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/musicalist/api/genero")
public class GeneroController {
    @Autowired
    GeneroMusicalRepository generoMusicalRepository;

    @Autowired
    CancionRepository cancionRepository;

    @Autowired
    AdministradorRepository administradorRepository;

    // Create -> Post
    @CrossOrigin
    @PostMapping(value = "/crear")
    public GeneroMusical crearGeneroMusical(@RequestBody GeneroMusical generoMusical) {
        return generoMusicalRepository.save(generoMusical);
    }

    // Retrieve -> GET
    @GetMapping("/all")
    public List<GeneroMusical> getGenerosMusicales() {
        return generoMusicalRepository.findAll();
    }

    @GetMapping("/{id}")
    public GeneroMusical getGeneroID(@PathVariable Integer id) {
        return generoMusicalRepository.findById(id).orElse(null);
    }

    // Update -> PUT
    @PutMapping("/actualizar/{id}")
    public GeneroMusical actualizarGenero(@PathVariable Integer id, @RequestBody GeneroMusical generoMusical){
        Optional<GeneroMusical> generoMusicalOptional = generoMusicalRepository.findById(id);
        if (generoMusicalOptional.isPresent()){
            generoMusical.setIdGenero(id);
            generoMusical.setCanciones(generoMusicalOptional.get().getCanciones());
            return generoMusicalRepository.save(generoMusical);
        }
        return null;
    }

    // Delete -> DELETE
    @DeleteMapping("/eliminar/{id}")
    public Boolean borrarId (@PathVariable Integer id){
        generoMusicalRepository.deleteById(id);
        return true;
    }
}
