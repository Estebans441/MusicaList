package co.edu.javeriana.musicalistbackend.controller;

import co.edu.javeriana.musicalistbackend.model.entity.GeneroMusical;
import co.edu.javeriana.musicalistbackend.repository.AdministradorRepository;
import co.edu.javeriana.musicalistbackend.repository.CancionRepository;
import co.edu.javeriana.musicalistbackend.repository.GeneroMusicalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/musicalist/api/generos/")
public class GeneroController {
    @Autowired
    GeneroMusicalRepository generoMusicalRepository;

    @Autowired
    CancionRepository cancionRepository;

    @Autowired
    AdministradorRepository administradorRepository;

    // Create -> Post
    @CrossOrigin
    @PostMapping()
    public ResponseEntity<GeneroMusical> crearGeneroMusical(@RequestBody GeneroMusical generoMusical) {
        GeneroMusical savedGeneroMusical = generoMusicalRepository.save(generoMusical);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedGeneroMusical);
    }

    // Retrieve -> GET
    @CrossOrigin
    @GetMapping()
    public ResponseEntity<List<GeneroMusical>> getGenerosMusicales() {
        List<GeneroMusical> generosMusicales = generoMusicalRepository.findAll();
        return ResponseEntity.ok(generosMusicales);
    }

    @CrossOrigin
    @GetMapping("{id}")
    public ResponseEntity<GeneroMusical> getGeneroID(@PathVariable Integer id) {
        Optional<GeneroMusical> generoMusicalOptional = generoMusicalRepository.findById(id);
        return generoMusicalOptional.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Update -> PUT
    @CrossOrigin
    @PutMapping("{id}")
    public ResponseEntity<GeneroMusical> actualizarGenero(@PathVariable Integer id, @RequestBody GeneroMusical generoMusical) {
        Optional<GeneroMusical> generoMusicalOptional = generoMusicalRepository.findById(id);
        if (generoMusicalOptional.isPresent()) {
            generoMusical.setIdGenero(id);
            generoMusical.setCanciones(generoMusicalOptional.get().getCanciones());
            GeneroMusical updatedGenero = generoMusicalRepository.save(generoMusical);
            return ResponseEntity.ok(updatedGenero);
        }
        return ResponseEntity.notFound().build();
    }

    // Delete -> DELETE
    @CrossOrigin
    @DeleteMapping("{id}")
    public ResponseEntity<Boolean> borrarId(@PathVariable Integer id) {
        generoMusicalRepository.deleteById(id);
        return ResponseEntity.ok(true);
    }
}
