package co.edu.javeriana.jwt.repository;

import co.edu.javeriana.jwt.model.Administrador;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AdministradorRepository extends JpaRepository<Administrador, Integer> {
    Optional<Administrador> findByNombreUsuarioOrCorreo(String nombre, String correo);
}