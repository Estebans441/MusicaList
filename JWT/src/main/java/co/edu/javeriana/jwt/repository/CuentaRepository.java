package co.edu.javeriana.jwt.repository;

import co.edu.javeriana.jwt.model.Cuenta;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CuentaRepository extends JpaRepository<Cuenta, Integer> {
    public Optional<Cuenta> findByNombreUsuarioOrCorreo(String usuario, String correo);
}