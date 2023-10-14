package backend.software.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import backend.software.models.BikeColors;

@Repository
public interface BikeColorsRepository extends JpaRepository<BikeColors, Long> {
    
}
