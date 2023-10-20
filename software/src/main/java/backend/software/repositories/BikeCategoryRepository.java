package backend.software.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import backend.software.models.BikeCategories;

@Repository
public interface BikeCategoryRepository extends JpaRepository<BikeCategories, Long> {
     
}
