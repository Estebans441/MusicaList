package co.edu.javeriana.musicalistbackend.controller;

import co.edu.javeriana.musicalistbackend.model.entity.Cancion;
import co.edu.javeriana.musicalistbackend.model.entity.Votante;
import co.edu.javeriana.musicalistbackend.repository.CancionRepository;
import co.edu.javeriana.musicalistbackend.repository.VotanteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/musicalist/api/votantes/")
public class VotanteController {
    @Autowired
    VotanteRepository votanteRepository;

    @Autowired
    CancionRepository cancionRepository;

    // Create -> POST
    @CrossOrigin
    @PostMapping()
    public ResponseEntity<Votante> crearVotante(@RequestBody Votante votante) {
        Optional<Votante> optionalAdministrador = votanteRepository.findByNombreUsuarioOrCorreo(votante.getNombreUsuario(), votante.getCorreo());
        if (optionalAdministrador.isPresent()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(new Votante());
        }
        Votante savedVotante = votanteRepository.save(votante);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedVotante);
    }

    // Retrieve -> GET
    @CrossOrigin
    @GetMapping()
    public ResponseEntity<List<Votante>> getVotantes() {
        List<Votante> votantes = votanteRepository.findAll();
        return ResponseEntity.ok(votantes);
    }

    @CrossOrigin
    @GetMapping("{id}")
    public ResponseEntity<Votante> getVotanteID(@PathVariable Integer id) {
        Optional<Votante> votanteOptional = votanteRepository.findById(id);
        if (votanteOptional.isPresent()) {
            return ResponseEntity.ok(votanteOptional.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @CrossOrigin
    @PutMapping("votar/{idVotante}-{idCancion}")
    public ResponseEntity<Boolean> votarCancion(@PathVariable Integer idVotante, @PathVariable Integer idCancion) {
        Optional<Votante> votanteOptional = votanteRepository.findById(idVotante);
        Optional<Cancion> cancionOptional = cancionRepository.findById(idCancion);
        if (votanteOptional.isEmpty() || cancionOptional.isEmpty())
            return ResponseEntity.badRequest().body(false);
        Votante votante = votanteOptional.get();
        votante.votarCancion(cancionOptional.get());
        votanteRepository.save(votante);
        return ResponseEntity.ok(true);
    }

    @CrossOrigin
    @PutMapping("eliminar-voto/{idVotante}-{idCancion}")
    public ResponseEntity<Boolean> eliminarVotoCancion(@PathVariable Integer idVotante, @PathVariable Integer idCancion) {
        Optional<Votante> votanteOptional = votanteRepository.findById(idVotante);
        Optional<Cancion> cancionOptional = cancionRepository.findById(idCancion);
        if (votanteOptional.isEmpty() || cancionOptional.isEmpty())
            return ResponseEntity.badRequest().body(false);
        Votante votante = votanteOptional.get();
        votante.eliminarVotoCancion(cancionOptional.get());
        votanteRepository.save(votante);
        return ResponseEntity.ok(true);
    }
}
