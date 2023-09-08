package co.edu.javeriana.musicalistbackend;

import co.edu.javeriana.musicalistbackend.model.Administrador;
import co.edu.javeriana.musicalistbackend.repository.AdministradorRepository;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@Transactional
public class CuentasTest {
    @Autowired
    AdministradorRepository administradorRepository;

    @Test
    void crearAdministrador(){
        Administrador administrador = new Administrador("estebans441","estebans441@gmail.com","ESA1234");
        administradorRepository.save(administrador);
        assert(true);
    }
}
