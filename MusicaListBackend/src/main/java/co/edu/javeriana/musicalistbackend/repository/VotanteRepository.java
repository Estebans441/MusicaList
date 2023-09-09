package co.edu.javeriana.musicalistbackend.repository;

import co.edu.javeriana.musicalistbackend.model.Votante;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface VotanteRepository extends JpaRepository<Votante, Integer> {
    Optional<Votante> findByNombreUsuario(String nombre);
}