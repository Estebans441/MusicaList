package co.edu.javeriana.jwt.repository;

import co.edu.javeriana.jwt.model.Votante;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface VotanteRepository extends JpaRepository<Votante, Integer> {
    Optional<Votante> findByNombreUsuarioOrCorreo(String nombre, String correo);
}