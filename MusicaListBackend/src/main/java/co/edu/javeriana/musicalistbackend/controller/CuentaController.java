package co.edu.javeriana.musicalistbackend.controller;

import co.edu.javeriana.musicalistbackend.model.dto.CuentaDTO;
import co.edu.javeriana.musicalistbackend.model.entity.Cuenta;
import co.edu.javeriana.musicalistbackend.repository.CuentaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.Optional;

@RestController
@RequestMapping("/musicalist/api/cuentas/")
public class CuentaController {

    @Autowired
    CuentaRepository cuentaRepository;

    @CrossOrigin
    @GetMapping()
    public ResponseEntity<CuentaDTO> getCuenta(@RequestHeader("jwt-token") String token) {
        String urlJWT = "http://localhost:8082/public/autenticacion";

        HttpHeaders headers = new HttpHeaders();
        headers.set("jwt-token", token);
        HttpEntity<String> entity = new HttpEntity<>(headers);

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<CuentaDTO> response = restTemplate.postForEntity(urlJWT, entity, CuentaDTO.class);

        if (response.getStatusCode().is2xxSuccessful()) {
            CuentaDTO cuenta = response.getBody();
            assert cuenta != null;
            return ResponseEntity.ok(cuenta);
        }
        return ResponseEntity.notFound().build();
    }

    // Update -> PUT
    @CrossOrigin
    @PutMapping()
    public ResponseEntity<Cuenta> actualizarCuenta(@RequestHeader("jwt-token") String token, @RequestBody Cuenta nuevaCuenta) {
        int id = checkAccount(token);
        if (id != -1) {
            Optional<Cuenta> cuentaOptional = cuentaRepository.findById(id);
            if (cuentaOptional.isPresent()) {
                Cuenta cuenta = cuentaOptional.get();
                cuenta.setNombreUsuario(nuevaCuenta.getNombreUsuario());
                cuenta.setCorreo(nuevaCuenta.getCorreo());
                cuentaRepository.save(cuenta);
                return ResponseEntity.ok(cuenta);
            }
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.notFound().build();
    }

    // Update -> PUT
    @CrossOrigin
    @PutMapping("pass")
    public ResponseEntity<Boolean> actualizarPass(@RequestHeader("jwt-token") String token, @RequestParam String anterior, @RequestParam String nueva) {
        int id = checkAccount(token);
        if (id != -1) {
            Optional<Cuenta> cuentaOptional = cuentaRepository.findById(id);
            if (cuentaOptional.isPresent()) {
                Cuenta cuenta = cuentaOptional.get();
                if (cuenta.coincide(anterior)) {
                    cuenta.setContrasena(nueva);
                    cuentaRepository.save(cuenta);
                    return ResponseEntity.ok(true);
                } else {
                    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(false);
                }
            }
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.notFound().build();
    }

    // Delete -> DELETE
    @CrossOrigin
    @DeleteMapping()
    public ResponseEntity<Boolean> borrarId(@RequestHeader("jwt-token") String token) {
        int id = checkAccount(token);
        if (id != -1) {
            Optional<Cuenta> cuentaOptional = cuentaRepository.findById(id);
            if (cuentaOptional.isPresent()) {
                cuentaRepository.deleteById(id);
                return ResponseEntity.ok(true);
            }
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.notFound().build();
    }


    private Integer checkAccount(String token) {
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
