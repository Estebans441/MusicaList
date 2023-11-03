package co.edu.javeriana.musicalistbackend.controller;

import co.edu.javeriana.musicalistbackend.model.entity.Cancion;
import co.edu.javeriana.musicalistbackend.model.entity.GeneroMusical;
import co.edu.javeriana.musicalistbackend.repository.CancionRepository;
import co.edu.javeriana.musicalistbackend.repository.GeneroMusicalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@RestController
@RequestMapping("/musicalist/api/canciones/")
public class CancionController {
    @Autowired
    private CancionRepository cancionRepository;

    @Autowired
    private GeneroMusicalRepository generoMusicalRepository;

    // Create -> POST
    @CrossOrigin
    @PostMapping()
    public ResponseEntity<Cancion> crearCancion(@RequestBody Cancion cancion) {
        Optional<GeneroMusical> generoMusicalOptional = generoMusicalRepository.findById(cancion.getGeneroMusical().getIdGenero());
        if (generoMusicalOptional.isPresent()) {
            cancion.setGeneroMusical(generoMusicalOptional.get());
            Cancion savedCancion = cancionRepository.save(cancion);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedCancion);
        }
        return ResponseEntity.notFound().build();
    }

    // Retrieve -> GET
    @CrossOrigin
    @GetMapping()
    public ResponseEntity<List<Cancion>> getCanciones() {
        List<Cancion> canciones = cancionRepository.findAll();
        return ResponseEntity.ok(canciones);
    }

    @CrossOrigin
    @GetMapping("{id}")
    public ResponseEntity<Cancion> getCancionId(@PathVariable Integer id) {
        Optional<Cancion> cancionOptional = cancionRepository.findById(id);
        return cancionOptional.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @CrossOrigin
    @GetMapping("/name-artist/{name}")
    public ResponseEntity<List<Cancion>> findCancionName(@PathVariable String name) {
        List<Cancion> canciones = cancionRepository.findByNombreContainingOrArtistaContaining(name, name);
        return ResponseEntity.ok(canciones);
    }

    // Update -> PUT
    @CrossOrigin
    @PutMapping("{id}")
    public ResponseEntity<Cancion> actualizarCancion(@PathVariable Integer id, @RequestBody Cancion cancion) {
        Optional<Cancion> cancionOptional = cancionRepository.findById(id);
        if (cancionOptional.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        // Datos que no se pueden editar
        cancion.setIdCancion(id);
        cancion.setVotos(cancionOptional.get().getVotos());

        // Si decide cambiar género musical
        Optional<GeneroMusical> generoMusicalOptional = Optional.empty();
        if (cancion.getGeneroMusical().getIdGenero() != null) {
            generoMusicalOptional = generoMusicalRepository.findById(cancion.getGeneroMusical().getIdGenero());
        }
        if (generoMusicalOptional.isPresent())
            cancion.setGeneroMusical(generoMusicalOptional.get());
        else cancion.setGeneroMusical(cancionOptional.get().getGeneroMusical());

        Cancion updatedCancion = cancionRepository.save(cancion);
        return ResponseEntity.ok(updatedCancion);
    }

    // Delete -> DELETE
    @CrossOrigin
    @DeleteMapping("{id}")
    public ResponseEntity<Boolean> borrarId(@PathVariable Integer id) {
        if (cancionRepository.existsById(id)) {
            cancionRepository.deleteById(id);
            return ResponseEntity.ok(true);
        }
        return ResponseEntity.notFound().build();
    }
}
