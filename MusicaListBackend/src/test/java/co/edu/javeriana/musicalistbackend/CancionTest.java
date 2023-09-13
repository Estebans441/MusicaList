package co.edu.javeriana.musicalistbackend;

import co.edu.javeriana.musicalistbackend.model.Cancion;
import co.edu.javeriana.musicalistbackend.model.GeneroMusical;
import co.edu.javeriana.musicalistbackend.repository.AdministradorRepository;
import co.edu.javeriana.musicalistbackend.repository.CancionRepository;
import co.edu.javeriana.musicalistbackend.repository.GeneroMusicalRepository;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.Optional;

@SpringBootTest
@Transactional
public class CancionTest {
    @Autowired
    CancionRepository cancionRepository;

    @Autowired
    AdministradorRepository administradorRepository;

    @Autowired
    GeneroMusicalRepository generoMusicalRepository;

    @Test
    void crearCancion() {
        Optional<GeneroMusical> optionalGeneroMusical =
                generoMusicalRepository.findById(4);
        if (optionalGeneroMusical.isPresent()) {
            Cancion cancion = new Cancion("Something real",
                    "Post Malone",
                    270,
                    optionalGeneroMusical.get());
            cancionRepository.save(cancion);
        }
        assert (true);
    }

    @Test
    void findCancionById() {
        Cancion cancion = new Cancion();
        Optional<Cancion> cancionOptional =
                cancionRepository.findById(1);
        if (cancionOptional.isPresent())
            cancion = cancionOptional.get();

        System.out.println("Nombre de la cancion: " +
                cancion.getNombre());
        System.out.println("Genero: " +
                cancion.getGeneroMusical().getNombreGenero());
        assert (true);
    }

    @Test
    void findCancionByNombre() {
        Cancion cancion = new Cancion();
        Optional<Cancion> cancionOptional =
                cancionRepository.findByNombre("Shape of you");
        if (cancionOptional.isPresent())
            cancion = cancionOptional.get();

        System.out.println("Nombre de la cancion: " +
                cancion.getNombre());
        System.out.println("Genero: " +
                cancion.getGeneroMusical().getNombreGenero());
        assert (true);
    }

    @Test
    void findAllCanciones() {
        ArrayList<Cancion> canciones =
                (ArrayList<Cancion>) cancionRepository.findAll();

        for (Cancion cancion : canciones) {
            System.out.println("Nombre de la cancion: " +
                    cancion.getNombre());
            System.out.println("Genero: " +
                    cancion.getGeneroMusical().getNombreGenero());
        }
        assert (true);
    }

    @Test
    void actualizarCancion() {
        Cancion cancion = new Cancion();
        Optional<Cancion> cancionOptional =
                cancionRepository.findById(1);
        if (cancionOptional.isPresent())
            cancion = cancionOptional.get();

        cancion.setDuracionSeg(120);
        cancionRepository.save(cancion);

        assert (true);
    }

    @Test
    void eliminarCancion() {
        administradorRepository.deleteById(1);
        assert (true);
    }
}
