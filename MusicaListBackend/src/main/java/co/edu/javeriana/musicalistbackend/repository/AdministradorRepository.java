package co.edu.javeriana.musicalistbackend.repository;

import co.edu.javeriana.musicalistbackend.model.Administrador;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdministradorRepository extends JpaRepository<Administrador, Integer> {
}