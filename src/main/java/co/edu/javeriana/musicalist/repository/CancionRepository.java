package co.edu.javeriana.musicalist.repository;

import co.edu.javeriana.musicalist.model.Cancion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CancionRepository extends JpaRepository<Cancion, Integer> {
}