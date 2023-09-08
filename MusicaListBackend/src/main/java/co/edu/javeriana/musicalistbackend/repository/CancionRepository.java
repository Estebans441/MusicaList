package co.edu.javeriana.musicalistbackend.repository;

import co.edu.javeriana.musicalistbackend.model.Cancion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CancionRepository extends JpaRepository<Cancion, Integer> {
}