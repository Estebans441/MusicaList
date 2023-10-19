package co.edu.javeriana.musicalistbackend.controller;

import co.edu.javeriana.musicalistbackend.model.Cancion;
import co.edu.javeriana.musicalistbackend.model.GeneroMusical;
import co.edu.javeriana.musicalistbackend.repository.CancionRepository;
import co.edu.javeriana.musicalistbackend.repository.GeneroMusicalRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

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
        if (generoMusicalOptional.isPresent()) {
            cancion.setGeneroMusical(generoMusicalOptional.get());
            return cancionRepository.save(cancion);
        }
        return null;
    }


    // Retrieve -> GET
    @CrossOrigin
    @GetMapping("/all")
    public List<Cancion> getCanciones() {
        return cancionRepository.findAll();
    }

    @CrossOrigin
    @GetMapping("/{id}")
    public Cancion getCancionId(@PathVariable Integer id) {
        return cancionRepository.findById(id).orElse(null);
    }

    @CrossOrigin
    @GetMapping("/name-like/{name}")
    public List<Cancion> findCancionName(@PathVariable String name) {
        return cancionRepository.findByNombreContainingOrArtistaContaining(name, name);
    }

    //Feature -> GET
    @CrossOrigin
    @GetMapping("/cancionesGenero/{id}")
    public Set<Cancion> getCancionesGenero(@PathVariable Integer id) {
        Optional<GeneroMusical> generoMusicalOptional = generoMusicalRepository.findById(id);
        return generoMusicalOptional.map(GeneroMusical::getCanciones).orElse(null);
    }

    // Update -> PUT
    @CrossOrigin
    @PutMapping("/actualizar/{id}")
    public Cancion actualizarCancion(@PathVariable Integer id, @RequestBody Cancion cancion) {
        Optional<Cancion> cancionOptional = cancionRepository.findById(id);
        if (cancionOptional.isEmpty())
            return null;
        // Datos que no se pueden editar
        cancion.setIdCancion(id);
        cancion.setVotos(cancionOptional.get().getVotos());

        // Si decide cambiar género musical
        Optional<GeneroMusical> generoMusicalOptional = Optional.empty();
        if (cancion.getGeneroMusical().getIdGenero() != null)
            generoMusicalOptional = generoMusicalRepository.findById(cancion.getGeneroMusical().getIdGenero());
        if (generoMusicalOptional.isPresent())
            cancion.setGeneroMusical(generoMusicalOptional.get());
        else
            cancion.setGeneroMusical(cancionOptional.get().getGeneroMusical());
        return cancionRepository.save(cancion);
    }

    // Delete -> DELETE
    @CrossOrigin
    @DeleteMapping("/eliminar/{id}")
    public Boolean borrarId(@PathVariable Integer id) {
        cancionRepository.deleteById(id);
        return true;
    }

}
