package co.edu.javeriana.musicalist.repository;

import co.edu.javeriana.musicalist.model.Votante;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VotanteRepository extends JpaRepository<Votante, Integer> {
}