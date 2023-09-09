package co.edu.javeriana.musicalistbackend.controller;

import co.edu.javeriana.musicalistbackend.model.Cancion;
import co.edu.javeriana.musicalistbackend.repository.CancionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/musicalist/api/cancion")
public class CancionController {
    @Autowired
    private CancionRepository cancionRepository;

    @GetMapping("/{id}")
    public Cancion getAdministradorId(@PathVariable Integer id){
        return cancionRepository.findById(id).orElse(null);
    }
}
