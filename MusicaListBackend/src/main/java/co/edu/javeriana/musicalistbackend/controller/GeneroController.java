package co.edu.javeriana.musicalistbackend.controller;

import co.edu.javeriana.musicalistbackend.model.GeneroMusical;
import co.edu.javeriana.musicalistbackend.repository.GeneroMusicalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/musicalist/api/genero")
public class GeneroController {
    @Autowired
    GeneroMusicalRepository generoMusicalRepository;

    @GetMapping("/{id}")
    public GeneroMusical getAdministradorId(@PathVariable Integer id){
        return generoMusicalRepository.findById(id).orElse(null);
    }
}
