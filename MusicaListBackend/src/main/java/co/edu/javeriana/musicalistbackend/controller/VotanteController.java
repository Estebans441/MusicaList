package co.edu.javeriana.musicalistbackend.controller;

import co.edu.javeriana.musicalistbackend.model.Cancion;
import co.edu.javeriana.musicalistbackend.model.Votante;
import co.edu.javeriana.musicalistbackend.repository.CancionRepository;
import co.edu.javeriana.musicalistbackend.repository.VotanteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@RestController
@RequestMapping("/musicalist/api/votante")
public class VotanteController {
    @Autowired
    VotanteRepository votanteRepository;

    @Autowired
    CancionRepository cancionRepository;

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

    @PutMapping("/votar/{idVotante}-{idCancion}")
    public Boolean votarCancion(@PathVariable Integer idVotante, @PathVariable Integer idCancion){
        Optional<Votante> votanteOptional = votanteRepository.findById(idVotante);
        Optional<Cancion> cancionOptional = cancionRepository.findById(idCancion);
        if(votanteOptional.isEmpty() || cancionOptional.isEmpty())
            return false;
        Votante votante = votanteOptional.get();
        votante.getCancionesVotadas().add(cancionOptional.get());
        votanteRepository.save(votante);
        return true;
    }

    @PutMapping("/eliminar-voto/{idVotante}-{idCancion}")
    public Boolean eliminarVotoCancion(@PathVariable Integer idVotante, @PathVariable Integer idCancion){
        Optional<Votante> votanteOptional = votanteRepository.findById(idVotante);
        Optional<Cancion> cancionOptional = cancionRepository.findById(idCancion);
        if(votanteOptional.isEmpty() || cancionOptional.isEmpty())
            return false;
        Votante votante = votanteOptional.get();
        votante.getCancionesVotadas().remove(cancionOptional.get());
        votanteRepository.save(votante);
        return true;
    }
}
