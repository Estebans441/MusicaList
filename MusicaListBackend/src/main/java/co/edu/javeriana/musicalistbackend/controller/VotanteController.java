package co.edu.javeriana.musicalistbackend.controller;

import co.edu.javeriana.musicalistbackend.model.Cancion;
import co.edu.javeriana.musicalistbackend.model.Votante;
import co.edu.javeriana.musicalistbackend.repository.CancionRepository;
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

    @Autowired
    CancionRepository cancionRepository;

    // Create -> POST
    @CrossOrigin
    @PostMapping(value = "/crear")
    public Votante crearVotante(@RequestBody Votante votante){
        return votanteRepository.save(votante);
    }

    // Retrieve -> GET
    @CrossOrigin
    @GetMapping("/all")
    List<Votante> getVotantes(){return votanteRepository.findAll();}

    @CrossOrigin
    @GetMapping("/id/{id}")
    public Votante getVotanteID (@PathVariable Integer id){
        return votanteRepository.findById(id).orElse(null);
    }

    @CrossOrigin
    @GetMapping("{nombre}")
    public Votante getVotanteNombre (@PathVariable String nombre){
        return votanteRepository.findByNombreUsuarioOrCorreo(nombre, nombre).orElse(new Votante());
    }

    @CrossOrigin
    @PutMapping("/votar/{idVotante}-{idCancion}")
    public Boolean votarCancion(@PathVariable Integer idVotante, @PathVariable Integer idCancion){
        Optional<Votante> votanteOptional = votanteRepository.findById(idVotante);
        Optional<Cancion> cancionOptional = cancionRepository.findById(idCancion);
        if(votanteOptional.isEmpty() || cancionOptional.isEmpty())
            return false;
        Votante votante = votanteOptional.get();
        votante.votarCancion(cancionOptional.get());
        votanteRepository.save(votante);
        return true;
    }

    @CrossOrigin
    @PutMapping("/eliminar-voto/{idVotante}-{idCancion}")
    public Boolean eliminarVotoCancion(@PathVariable Integer idVotante, @PathVariable Integer idCancion){
        Optional<Votante> votanteOptional = votanteRepository.findById(idVotante);
        Optional<Cancion> cancionOptional = cancionRepository.findById(idCancion);
        if(votanteOptional.isEmpty() || cancionOptional.isEmpty())
            return false;
        Votante votante = votanteOptional.get();
        votante.eliminarVotoCancion(cancionOptional.get());
        votanteRepository.save(votante);
        return true;
    }
}
