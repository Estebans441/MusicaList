package co.edu.javeriana.musicalistbackend.repository;

import co.edu.javeriana.musicalistbackend.model.Cuenta;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CuentaRepository extends JpaRepository<Cuenta, Integer> {
}