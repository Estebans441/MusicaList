package co.edu.javeriana.musicalistbackend.controller;

import co.edu.javeriana.musicalistbackend.model.Administrador;
import co.edu.javeriana.musicalistbackend.model.Cancion;
import co.edu.javeriana.musicalistbackend.model.GeneroMusical;
import co.edu.javeriana.musicalistbackend.repository.CancionRepository;
import co.edu.javeriana.musicalistbackend.repository.GeneroMusicalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/musicalist/api/cancion")
public class CancionController {
    @Autowired
    private CancionRepository cancionRepository;

    @Autowired
    private GeneroMusicalRepository generoMusicalRepository;


    // Create -> POST
    @CrossOrigin
    @PostMapping(value = "/crear")
    public Cancion crearCancion(@RequestBody Cancion cancion) {
        Optional<GeneroMusical> generoMusicalOptional = generoMusicalRepository.findById(cancion.getGeneroMusical().getIdGenero());
        if(generoMusicalOptional.isPresent()){
            cancion.setGeneroMusical(generoMusicalOptional.get());
            return cancionRepository.save(cancion);
        }
        return null;
    }

    @GetMapping("/{id}")
    public Cancion getAdministradorId(@PathVariable Integer id){
        return cancionRepository.findById(id).orElse(null);
    }
}
