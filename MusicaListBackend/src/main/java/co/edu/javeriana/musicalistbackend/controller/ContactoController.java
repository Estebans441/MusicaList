package co.edu.javeriana.musicalistbackend.controller;

import co.edu.javeriana.musicalistbackend.model.PeticionContacto;
import co.edu.javeriana.musicalistbackend.repository.PeticionContactoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/musicalist/api/contacto")
public class ContactoController {

    @Autowired
    PeticionContactoRepository peticionContactoRepository;

    // Create -> POST
    @CrossOrigin
    @PostMapping(value = "/crear")
    public PeticionContacto crearPeticionContacto(@RequestBody PeticionContacto peticionContacto) {
        return peticionContactoRepository.save(peticionContacto);
    }

    // Send -> POST
    @CrossOrigin
    @PostMapping(value = "/enviar")
    public ResponseEntity sendContactData(@RequestBody PeticionContacto peticionContacto) {
        try {
            peticionContactoRepository.save(peticionContacto);
            return ResponseEntity.ok("Peticion de contacto guardada exitosamente");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al guardar la peticion de contacto");
        }
    }

    // Retrieve -> GET
    @CrossOrigin
    @GetMapping("/{id}")
    public PeticionContacto getPeticionID(@PathVariable Integer id){
        Optional<PeticionContacto> peticionContactoOptional = peticionContactoRepository.findById(id);
        return peticionContactoOptional.orElse(null);
    }

    @CrossOrigin
    @GetMapping("/all")
    public List<PeticionContacto> getPeticionesContacto(){
        return peticionContactoRepository.findAll();
    }

    // Update -> PUT
    @CrossOrigin
    @PutMapping("/actualizar/{id}")
    public PeticionContacto actualizarPeticionContacto(@PathVariable Integer id, @RequestBody PeticionContacto peticionContacto){
        Optional<PeticionContacto> peticionContactoOptional = peticionContactoRepository.findById(id);
        if (peticionContactoOptional.isPresent()){
            peticionContacto.setIdPeticionContacto(id);
            return peticionContactoRepository.save(peticionContacto);
        }
        return null;
    }

    // Delete -> DELETE
    @CrossOrigin
    @DeleteMapping("/eliminar/{id}")
    public Boolean borrarId(@PathVariable Integer id){
        peticionContactoRepository.deleteById(id);
        return true;
    }
}
