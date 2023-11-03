package co.edu.javeriana.musicalistbackend.repository;

import co.edu.javeriana.musicalistbackend.model.entity.PeticionContacto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PeticionContactoRepository extends JpaRepository<PeticionContacto, Integer> {
    public Optional<PeticionContacto> findByNombreUsuario(String nombreUsuario);
}