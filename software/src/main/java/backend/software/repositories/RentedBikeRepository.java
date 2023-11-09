package backend.software.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import backend.software.models.RentedBike;

@Repository
public interface RentedBikeRepository extends JpaRepository<RentedBike, Long> {
    
}
