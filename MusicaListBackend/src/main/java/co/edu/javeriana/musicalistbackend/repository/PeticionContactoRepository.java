package co.edu.javeriana.musicalistbackend.repository;

import co.edu.javeriana.musicalistbackend.model.PeticionContacto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PeticionContactoRepository extends JpaRepository<PeticionContacto, Integer> {
    Optional<PeticionContacto> findByNombre(String nombre);

}