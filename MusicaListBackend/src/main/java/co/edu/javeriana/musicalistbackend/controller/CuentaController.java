package co.edu.javeriana.musicalistbackend.controller;

import co.edu.javeriana.musicalistbackend.model.dto.CambioContrasena;
import co.edu.javeriana.musicalistbackend.model.Cuenta;
import co.edu.javeriana.musicalistbackend.repository.CuentaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/musicalist/api/cuenta")
public class CuentaController {

    @Autowired
    CuentaRepository cuentaRepository;

    // Update -> PUT
    @PutMapping("/actualizar/{id}")
    public Cuenta actualizarCuenta(@PathVariable Integer id, @RequestBody Cuenta nuevaCuenta) {
        Optional<Cuenta> cuentaOptional = cuentaRepository.findById(id);
        Cuenta cuenta;
        if (cuentaOptional.isPresent()) {
            cuenta = cuentaOptional.get();
            cuenta.setNombreUsuario(nuevaCuenta.getNombreUsuario());
            cuenta.setCorreo(nuevaCuenta.getCorreo());
            return cuentaRepository.save(cuenta);
        }
        return null;
    }

    // Update -> PUT
    @PutMapping("/actualizar-c/{id}")
    public Boolean actualizarContrasena(@PathVariable Integer id, @RequestBody CambioContrasena cambio) {
        Optional<Cuenta> cuentaOptional = cuentaRepository.findById(id);
        if (cuentaOptional.isEmpty())
            return false;
        Cuenta cuenta = cuentaOptional.get();
        if (cuenta.coincide(cambio.anteriorContrasena)) {
            cuenta.setContrasena(cambio.nuevaContrasena);
            cuentaRepository.save(cuenta);
            return true;
        } else return false;
    }

    // Delete -> DELETE
    @DeleteMapping("/eliminar/{id}")
    public Boolean borrarId(@PathVariable Integer id) {
        cuentaRepository.deleteById(id);
        return true;
    }
}
