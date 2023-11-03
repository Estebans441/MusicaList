package co.edu.javeriana.musicalistbackend;

import co.edu.javeriana.musicalistbackend.model.entity.Cancion;
import co.edu.javeriana.musicalistbackend.model.entity.GeneroMusical;
import co.edu.javeriana.musicalistbackend.repository.AdministradorRepository;
import co.edu.javeriana.musicalistbackend.repository.GeneroMusicalRepository;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@SpringBootTest
@Transactional

public class GeneroTest {
    @Autowired
    GeneroMusicalRepository generoMusicalRepository;

    @Autowired
    AdministradorRepository administradorRepository;
    @Test
    void crearGeneroMusical (){
        GeneroMusical generoMusical = new GeneroMusical
                ("Cumbia",
                        "Genero musical Cumbia Villera");
        generoMusicalRepository.save(generoMusical);
        assert (true);
    }

    @Test
    void findGeneroByID(){
        GeneroMusical generoMusical =
                new GeneroMusical();
        Optional<GeneroMusical> optionalGeneroMusical =
                generoMusicalRepository.findById(2);
        if(optionalGeneroMusical.isPresent())
            generoMusical = optionalGeneroMusical.get();
        System.out.println("Nombre del Genero Musical: " +
                generoMusical.getNombreGenero());

        //Imprimir canciones del genero musical
        Set<Cancion> canciones =
                generoMusical.getCanciones();
        System.out.println("Canciones del Genero: ");
        for (Cancion cancion : canciones){
            System.out.println("\t- " + cancion.getNombre());
        }

        assert (true);
    }

    @Test
    void findAllGeneros(){
        List<GeneroMusical> listaGeneros =
                generoMusicalRepository.findAll();
        for (GeneroMusical generoMusical : listaGeneros){
            System.out.println("Nombre del genero músical: " +
                    generoMusical.getNombreGenero());
        }
        assert (true);
    }

    @Test
    void findByNameGenero(){
        GeneroMusical generoMusical = new GeneroMusical();
        Optional<GeneroMusical> optionalGeneroMusical =
                generoMusicalRepository.
                        findGeneroMusicalByNombreGenero("Rock");

        if (optionalGeneroMusical.isPresent())
            generoMusical = optionalGeneroMusical.get();

        System.out.println("Se encontro el genero musical con nombre: " +
                generoMusical.getNombreGenero());

        assert (true);
    }

    @Test
    void actualizarGeneroMusical(){
        GeneroMusical generoMusical = new GeneroMusical();
        Optional <GeneroMusical> optionalGeneroMusical =
                generoMusicalRepository.findById(2);
        if (optionalGeneroMusical.isPresent())
            generoMusical = optionalGeneroMusical.get();

        //Modificar el nombre de rock a rock en español
        generoMusical.setNombreGenero("Rock en español");
        generoMusicalRepository.save(generoMusical);

        assert (true);
    }

    @Test
    void eliminarGeneroMusical(){
        generoMusicalRepository.deleteById(2);
        assert (true);
    }
}
