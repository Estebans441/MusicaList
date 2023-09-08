package co.edu.javeriana.musicalist.repository;

import co.edu.javeriana.musicalist.model.Cuenta;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CuentaRepository extends JpaRepository<Cuenta, Integer> {
}