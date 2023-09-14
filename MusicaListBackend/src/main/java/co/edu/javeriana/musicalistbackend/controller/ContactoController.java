package co.edu.javeriana.musicalistbackend.controller;

import co.edu.javeriana.musicalistbackend.model.PeticionContacto;
import co.edu.javeriana.musicalistbackend.repository.PeticionContactoRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/musicalist/api/contacto")
public class ContactoController {
    PeticionContactoRepository peticionContactoRepository;

    // Send -> POST
    @CrossOrigin
    @PostMapping(value = "/enviar")
    public ResponseEntity enviarDatosContacto(@RequestBody PeticionContacto peticionContacto) {
        try {
            peticionContactoRepository.save(peticionContacto);
            return ResponseEntity.ok("Peticion de contacto guardada exitosamente");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al guardar la peticion de contacto");
        }
    }
}
