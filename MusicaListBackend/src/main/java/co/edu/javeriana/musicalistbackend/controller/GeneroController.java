package co.edu.javeriana.musicalistbackend.controller;

import co.edu.javeriana.musicalistbackend.model.dto.GeneroMusicalDTO;
import co.edu.javeriana.musicalistbackend.model.dto.GeneroSimpleDTO;
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
    public ResponseEntity<GeneroSimpleDTO> crearGeneroMusical(@RequestBody GeneroMusicalDTO generoMusical) {
        GeneroMusical creado = new GeneroMusical(generoMusical.getNombreGenero(), generoMusical.getDescripcion());
        GeneroMusical savedGeneroMusical = generoMusicalRepository.save(creado);
        return ResponseEntity.status(HttpStatus.CREATED).body(new GeneroSimpleDTO(savedGeneroMusical));
    }

    // Retrieve -> GET
    @CrossOrigin
    @GetMapping()
    public ResponseEntity<List<GeneroSimpleDTO>> getGenerosMusicales() {
        List<GeneroSimpleDTO> generosMusicales = generoMusicalRepository.findAll().stream().map(GeneroSimpleDTO::new).toList();
        return ResponseEntity.ok(generosMusicales);
    }

    @CrossOrigin
    @GetMapping("{id}")
    public ResponseEntity<GeneroMusicalDTO> getGeneroID(@PathVariable Integer id) {
        Optional<GeneroMusical> generoMusicalOptional = generoMusicalRepository.findById(id);
        return generoMusicalOptional.map(generoMusical -> ResponseEntity.ok(new GeneroMusicalDTO(generoMusical))).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Update -> PUT
    @CrossOrigin
    @PutMapping("{id}")
    public ResponseEntity<GeneroSimpleDTO> actualizarGenero(@PathVariable Integer id, @RequestBody GeneroSimpleDTO generoMusical) {
        Optional<GeneroMusical> generoMusicalOptional = generoMusicalRepository.findById(id);
        if (generoMusicalOptional.isPresent()) {
            GeneroMusical actualizado = generoMusicalOptional.get();
            actualizado.setIdGenero(id);
            actualizado.setNombreGenero(generoMusical.getNombreGenero());
            actualizado.setDescripcion(generoMusical.getDescripcion());
            return ResponseEntity.ok(new GeneroSimpleDTO(generoMusicalRepository.save(actualizado)));
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
