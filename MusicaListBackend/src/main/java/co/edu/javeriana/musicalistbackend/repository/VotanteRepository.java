package co.edu.javeriana.musicalistbackend.repository;

import co.edu.javeriana.musicalistbackend.model.Votante;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VotanteRepository extends JpaRepository<Votante, Integer> {
}