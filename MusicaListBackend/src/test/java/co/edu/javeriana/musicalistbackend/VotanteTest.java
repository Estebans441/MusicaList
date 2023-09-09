package co.edu.javeriana.musicalistbackend;

import co.edu.javeriana.musicalistbackend.model.Votante;
import co.edu.javeriana.musicalistbackend.model.GeneroMusical;
import co.edu.javeriana.musicalistbackend.repository.VotanteRepository;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.Optional;
import java.util.Set;

@SpringBootTest
@Transactional
public class VotanteTest {
    @Autowired
    VotanteRepository votanteRepository;

    @Test
    void crearVotante(){
        Votante votante = new Votante("unpipol","pablo@gmail.com","PABLO1234");
        votanteRepository.save(votante);
        assert(true);
    }

    @Test
    void findVotanteById(){
        Votante votante = new Votante();
        Optional<Votante> optionalVotante = votanteRepository.findById(3);
        if(optionalVotante.isPresent())
            votante = optionalVotante.get();
        System.out.println("Nombre de votante: " + votante.getNombreUsuario());
        assert(true);
    }

    @Test
    void findVotanteByNombre(){
        Votante votante = new Votante();
        Optional<Votante> optionalVotante = votanteRepository.findByNombreUsuario("moyano1711");
        if(optionalVotante.isPresent())
            votante = optionalVotante.get();
        System.out.println("Nombre de votante: " + votante.getNombreUsuario());
        assert(true);
    }

    @Test
    void findAllVotantes(){
        ArrayList<Votante> vontante = (ArrayList<Votante>) votanteRepository.findAll();
        for(Votante votante : vontante){
            System.out.println("Nombre de votante: " + votante.getNombreUsuario());
        }
        assert(true);
    }

    @Test
    void actualizarVotante(){
        Votante votante = new Votante();
        Optional<Votante> optionalVotante = votanteRepository.findById(3);
        if(optionalVotante.isPresent())
            votante = optionalVotante.get();
        votante.setCorreo("moyano1711@hotmail.com");
        votanteRepository.save(votante);

        assert(true);
    }

    @Test
    void eliminarVotante(){
        votanteRepository.deleteById(2);
        assert(true);
    }
}
