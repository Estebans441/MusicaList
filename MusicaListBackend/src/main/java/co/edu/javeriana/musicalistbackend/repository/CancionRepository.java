package co.edu.javeriana.musicalistbackend.repository;

import co.edu.javeriana.musicalistbackend.model.entity.Cancion;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CancionRepository extends JpaRepository<Cancion, Integer> {
    Optional<Cancion> findByNombre(String nombre);
    List<Cancion> findByNombreContainingOrArtistaContaining(String nombre, String artista);
}