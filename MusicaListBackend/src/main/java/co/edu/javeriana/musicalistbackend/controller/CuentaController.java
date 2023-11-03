package co.edu.javeriana.musicalistbackend.controller;

import co.edu.javeriana.musicalistbackend.model.entity.Cuenta;
import co.edu.javeriana.musicalistbackend.repository.CuentaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/musicalist/api/cuentas/")
public class CuentaController {

    @Autowired
    CuentaRepository cuentaRepository;

    // Autenticar -> POST
    @CrossOrigin
    @PostMapping("auth")
    public ResponseEntity<Integer> autenticarCuenta(@RequestParam String correo, @RequestParam String contrasena) {
        Optional<Cuenta> cuentaOptional = cuentaRepository.findByNombreUsuarioOrCorreo(correo, correo);
        if (cuentaOptional.isPresent() && cuentaOptional.get().autenticar(contrasena)) {
            return ResponseEntity.ok(cuentaOptional.get().getIdCuenta());
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(-1);
    }

    // Update -> PUT
    @CrossOrigin
    @PutMapping("{id}")
    public ResponseEntity<Cuenta> actualizarCuenta(@PathVariable Integer id, @RequestBody Cuenta nuevaCuenta) {
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

    // Update -> PUT
    @CrossOrigin
    @PutMapping("pass/{id}")
    public ResponseEntity<Boolean> actualizarPass(@PathVariable Integer id, @RequestParam String anterior, @RequestParam String nueva) {
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

    // Delete -> DELETE
    @CrossOrigin
    @DeleteMapping("{id}")
    public ResponseEntity<Boolean> borrarId(@PathVariable Integer id) {
        cuentaRepository.deleteById(id);
        return ResponseEntity.ok(true);
    }
}
