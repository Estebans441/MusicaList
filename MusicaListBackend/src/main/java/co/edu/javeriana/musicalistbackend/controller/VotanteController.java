package co.edu.javeriana.musicalistbackend.controller;

import co.edu.javeriana.musicalistbackend.model.Votante;
import co.edu.javeriana.musicalistbackend.repository.VotanteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/musicalist/api/votante")
public class VotanteController {
    @Autowired
    VotanteRepository votanteRepository;

    // Create -> POST
    @CrossOrigin
    @PostMapping(value = "/crear")
    public Votante crearVotante(@RequestBody Votante votante){
        return votanteRepository.save(votante);
    }

    // Retrieve -> GET
    @GetMapping("/all")
    List<Votante> getVotantes(){return votanteRepository.findAll();}

    @GetMapping("{id}")
    public Votante getVotanteID (@PathVariable Integer id){
        return votanteRepository.findById(id).orElse(null);
    }

    // Update -> PUT
    @PutMapping("/actualizar/{id}")
    public Votante actualizarVotante(@PathVariable Integer id, @RequestBody Votante votante){
        Optional<Votante> optionalVotante = votanteRepository.findById(id);
        if (optionalVotante.isPresent()){
            votante.setIdCuenta(id);
            return votanteRepository.save(votante);
        }
        return null;
    }

    //Delete -> DELETE
    @DeleteMapping("/eliminar/{id}")
    public Boolean borrarId(@PathVariable Integer id){
        votanteRepository.deleteById(id);
        return true;
    }
}
