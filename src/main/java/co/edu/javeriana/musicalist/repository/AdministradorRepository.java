package co.edu.javeriana.musicalist.repository;

import co.edu.javeriana.musicalist.model.Administrador;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdministradorRepository extends JpaRepository<Administrador, Integer> {
}