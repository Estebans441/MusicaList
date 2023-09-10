package co.edu.javeriana.musicalistbackend.controller;

import co.edu.javeriana.musicalistbackend.model.Cancion;
import co.edu.javeriana.musicalistbackend.model.GeneroMusical;
import co.edu.javeriana.musicalistbackend.repository.AdministradorRepository;
import co.edu.javeriana.musicalistbackend.repository.CancionRepository;
import co.edu.javeriana.musicalistbackend.repository.GeneroMusicalRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/musicalist/api/cancion")
public class CancionController {
    @Autowired
    private CancionRepository cancionRepository;

    @Autowired
    private GeneroMusicalRepository generoMusicalRepository;

    @Autowired
    private AdministradorRepository administradorRepository;


    // Create -> POST
    @CrossOrigin
    @PostMapping(value = "/crear")
    public Cancion crearCancion(@RequestBody Cancion cancion) {
        Optional<GeneroMusical> generoMusicalOptional = generoMusicalRepository.findById(cancion.getGeneroMusical().getIdGenero());
        if(generoMusicalOptional.isPresent()){
            cancion.setGeneroMusical(generoMusicalOptional.get());
            return cancionRepository.save(cancion);
        }
        return null;
    }


    // Retrieve -> GET
    @GetMapping("/all")
    public List<Cancion> getCanciones(){
        return cancionRepository.findAll();
    }

    @GetMapping("/{id}")
    public Cancion getAdministradorId(@PathVariable Integer id){
        return cancionRepository.findById(id).orElse(null);
    }

    // Update -> PUT
    @PutMapping("/actualizar/{id}")
    public Cancion actualizarCancion(@PathVariable Integer id, @RequestBody Cancion cancion){
        Optional<Cancion> cancionOptional = cancionRepository.findById(id);
        if (cancionOptional.isPresent()){
            cancion.setIdCancion(id);
            return cancionRepository.save(cancion);
        }
        return null;
    }

    // Delete -> DELETE
    @DeleteMapping("/eliminar/{id}")
    public Boolean borrarId(@PathVariable Integer id){
        cancionRepository.deleteById(id);
        return true;
    }

}
