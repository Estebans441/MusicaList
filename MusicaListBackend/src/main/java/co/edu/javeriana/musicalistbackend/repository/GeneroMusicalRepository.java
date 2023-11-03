package co.edu.javeriana.musicalistbackend.repository;

import co.edu.javeriana.musicalistbackend.model.entity.GeneroMusical;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface GeneroMusicalRepository extends JpaRepository<GeneroMusical, Integer> {
}