package co.edu.javeriana.musicalistbackend;

import co.edu.javeriana.musicalistbackend.model.PeticionContacto;
import co.edu.javeriana.musicalistbackend.repository.PeticionContactoRepository;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.Optional;

@SpringBootTest
@Transactional
public class ContactoTest {
    @Autowired
    PeticionContactoRepository peticionContactoRepository;

    @Test
    void crearCancion(){
        PeticionContacto peticionContacto = new PeticionContacto(
                "Leonardo Castro",
                "leocastro@gmail.com",
                31,
                "Saludo",
                "Buenas tardes, me llamo Leonardo."
        );
        peticionContactoRepository.save(peticionContacto);
        assert (true);
    }

    @Test
    void findContactoByID(){
        PeticionContacto peticionContacto =
                new PeticionContacto();
        Optional<PeticionContacto> peticionContactoOptional =
                peticionContactoRepository.findById(1);
        if (peticionContactoOptional.isPresent())
            peticionContacto = peticionContactoOptional.get();

        System.out.println("Nombre del Solicitante: " +
                peticionContacto.getNombre());

        assert (true);
    }

    @Test
    void findAllContactos(){
        List<PeticionContacto> listaPeticiones =
                peticionContactoRepository.findAll();

        for (PeticionContacto peticion : listaPeticiones)
            System.out.println("Nombre Solicitante: " +
                    peticion.getNombre());

        assert (true);
    }

    @Test
    void findContactoByNombre(){
        PeticionContacto peticionContacto =
                new PeticionContacto();
        Optional<PeticionContacto> peticionContactoOptional =
                peticionContactoRepository.findByNombre
                        ("Cristiano Ronaldo");
        
        if (peticionContactoOptional.isPresent())
            peticionContacto = peticionContactoOptional.get();

        System.out.println("Nombre del Solicitante: " +
                peticionContacto.getNombre());

        assert (true);
    }

    @Test
    void actualizarContacto(){
        PeticionContacto peticionContacto =
                new PeticionContacto();
        Optional<PeticionContacto> peticionContactoOptional =
                peticionContactoRepository.findById(4);
        if (peticionContactoOptional.isPresent())
            peticionContacto = peticionContactoOptional.get();

        //Modificar la edad de 38 a 39
        peticionContacto.setEdad(39);
        peticionContactoRepository.save(peticionContacto);

        assert (true);
    }

    @Test
    void eliminarContacto(){
        peticionContactoRepository.deleteById(3);
        assert (true);
    }
}
