package co.edu.javeriana.musicalistbackend.controller;

import co.edu.javeriana.musicalistbackend.model.dto.CuentaDTO;
import co.edu.javeriana.musicalistbackend.model.dto.GeneroMusicalDTO;
import co.edu.javeriana.musicalistbackend.model.dto.GeneroSimpleDTO;
import co.edu.javeriana.musicalistbackend.model.entity.GeneroMusical;
import co.edu.javeriana.musicalistbackend.repository.AdministradorRepository;
import co.edu.javeriana.musicalistbackend.repository.CancionRepository;
import co.edu.javeriana.musicalistbackend.repository.GeneroMusicalRepository;
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
    public ResponseEntity<GeneroSimpleDTO> crearGeneroMusical(@RequestHeader("jwt-token") String token, @RequestBody GeneroMusicalDTO generoMusical) {
        if (checkAdminRole(token)) {
            GeneroMusical creado = new GeneroMusical(generoMusical.getNombreGenero(), generoMusical.getDescripcion());
            GeneroMusical savedGeneroMusical = generoMusicalRepository.save(creado);
            return ResponseEntity.status(HttpStatus.CREATED).body(new GeneroSimpleDTO(savedGeneroMusical));
        }
        return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
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
    public ResponseEntity<GeneroSimpleDTO> actualizarGenero(@RequestHeader("jwt-token") String token, @PathVariable Integer id, @RequestBody GeneroSimpleDTO generoMusical) {
        if (checkAdminRole(token)) {
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
        return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
    }

    // Delete -> DELETE
    @CrossOrigin
    @DeleteMapping("{id}")
    public ResponseEntity<Boolean> borrarId(@RequestHeader("jwt-token") String token, @PathVariable Integer id) {
        if (checkAdminRole(token)) {
            generoMusicalRepository.deleteById(id);
            return ResponseEntity.ok(true);
        }
        return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
    }

    private boolean checkAdminRole(String token) {
        String urlJWT = "http://localhost:8082/public/autenticacion";

        HttpHeaders headers = new HttpHeaders();
        headers.set("jwt-token", token);
        HttpEntity<String> entity = new HttpEntity<>(headers);

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<CuentaDTO> response = restTemplate.postForEntity(urlJWT, entity, CuentaDTO.class);

        if (response.getStatusCode().is2xxSuccessful()) {
            CuentaDTO cuenta = response.getBody();
            assert cuenta != null;
            return cuenta.getRole().equals("Admin");
        }
        return false;
    }
}
