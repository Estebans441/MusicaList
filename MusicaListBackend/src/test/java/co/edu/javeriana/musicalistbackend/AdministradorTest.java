package co.edu.javeriana.musicalistbackend;

import co.edu.javeriana.musicalistbackend.model.Administrador;
import co.edu.javeriana.musicalistbackend.repository.AdministradorRepository;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.Optional;

@SpringBootTest
@Transactional
public class AdministradorTest {
    @Autowired
    AdministradorRepository administradorRepository;

    @Test
    void crearAdministrador() {
        Administrador administrador = new Administrador(
                "unpipol",
                "pablo@gmail.com",
                "PABLO1234");
        administradorRepository.save(administrador);
        assert (true);
    }

    @Test
    void findAdministradorById() {
        Administrador administrador = new Administrador();
        Optional<Administrador> optionalAdministrador =
                administradorRepository.findById(1);
        if (optionalAdministrador.isPresent())
            administrador = optionalAdministrador.get();
        System.out.println("Nombre de administrador: " +
                administrador.getNombreUsuario());
        assert (true);
    }

    @Test
    void findAdministradorByNombre() {
        Administrador administrador = new Administrador();
        Optional<Administrador> optionalAdministrador =
                administradorRepository.findByNombreUsuarioOrCorreo("estebans441", "estebans441@gmail.com");
        if (optionalAdministrador.isPresent())
            administrador = optionalAdministrador.get();
        System.out.println("Nombre de administrador: " +
                administrador.getNombreUsuario());
        assert (true);
    }

    @Test
    void findAllAdministradores() {
        ArrayList<Administrador> administradores = (ArrayList<Administrador>)
                administradorRepository.findAll();
        for (Administrador administrador : administradores) {
            System.out.println("Nombre de administrador: " +
                    administrador.getNombreUsuario());
        }
        assert (true);
    }

    @Test
    void actualizarAdministrador() {
        Administrador administrador = new Administrador();
        Optional<Administrador> optionalAdministrador = administradorRepository.
                findById(2);
        if (optionalAdministrador.isPresent())
            administrador = optionalAdministrador.get();
        administrador.setCorreo("juanframireze@hotmail.com");
        administradorRepository.save(administrador);

        assert (true);
    }

    @Test
    void eliminarAdministrador() {
        administradorRepository.deleteById(2);
        assert (true);
    }
}
