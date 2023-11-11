package co.edu.javeriana.musicalistbackend.controller;

import co.edu.javeriana.musicalistbackend.model.dto.CancionSimpleDTO;
import co.edu.javeriana.musicalistbackend.model.dto.CuentaDTO;
import co.edu.javeriana.musicalistbackend.model.dto.VotanteDTO;
import co.edu.javeriana.musicalistbackend.model.entity.Cancion;
import co.edu.javeriana.musicalistbackend.model.entity.Votante;
import co.edu.javeriana.musicalistbackend.repository.CancionRepository;
import co.edu.javeriana.musicalistbackend.repository.VotanteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

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
    public ResponseEntity<VotanteDTO> getVotanteID(@PathVariable Integer id) {
        Optional<Votante> votanteOptional = votanteRepository.findById(id);
        return votanteOptional.map(votante -> ResponseEntity.ok(new VotanteDTO(votante))).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @CrossOrigin
    @GetMapping("votos")
    public ResponseEntity<List<CancionSimpleDTO>> getCancionesVotadas(@RequestHeader("jwt-token") String token) {
        int id = checkUserRole(token);
        if (id != -1) {
            Optional<Votante> votanteOptional = votanteRepository.findById(id);
            return votanteOptional.map(votante -> ResponseEntity.ok(votante.getCancionesVotadas().stream().map(CancionSimpleDTO::new).toList()))
                    .orElseGet(() -> ResponseEntity.notFound().build());
        }
        return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
    }

    @CrossOrigin
    @PutMapping("votar/{idCancion}")
    public ResponseEntity<Boolean> votarCancion(@RequestHeader("jwt-token") String token, @PathVariable Integer idCancion) {
        int idVotante = checkUserRole(token);
        if (idVotante != -1) {
            Optional<Votante> votanteOptional = votanteRepository.findById(idVotante);
            Optional<Cancion> cancionOptional = cancionRepository.findById(idCancion);
            if (votanteOptional.isEmpty() || cancionOptional.isEmpty())
                return ResponseEntity.badRequest().body(false);
            Votante votante = votanteOptional.get();
            votante.votarCancion(cancionOptional.get());
            votanteRepository.save(votante);
            return ResponseEntity.ok(true);
        }
        return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
    }

    @CrossOrigin
    @PutMapping("eliminar-voto/{idCancion}")
    public ResponseEntity<Boolean> eliminarVotoCancion(@RequestHeader("jwt-token") String token, @PathVariable Integer idCancion) {
        int idVotante = checkUserRole(token);
        if (idVotante != -1) {
            Optional<Votante> votanteOptional = votanteRepository.findById(idVotante);
            Optional<Cancion> cancionOptional = cancionRepository.findById(idCancion);
            if (votanteOptional.isEmpty() || cancionOptional.isEmpty())
                return ResponseEntity.badRequest().body(false);
            Votante votante = votanteOptional.get();
            votante.eliminarVotoCancion(cancionOptional.get());
            votanteRepository.save(votante);
            return ResponseEntity.ok(true);
        }
        return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
    }

    private Integer checkUserRole(String token) {
        String urlJWT = "http://localhost:8082/public/autenticacion";

        HttpHeaders headers = new HttpHeaders();
        headers.set("jwt-token", token);
        HttpEntity<String> entity = new HttpEntity<>(headers);

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<CuentaDTO> response = restTemplate.postForEntity(urlJWT, entity, CuentaDTO.class);

        if (response.getStatusCode().is2xxSuccessful()) {
            CuentaDTO cuenta = response.getBody();
            assert cuenta != null;
            if (cuenta.getRole().equals("User"))
                return cuenta.getIdCuenta();
        }
        return -1;
    }
}
