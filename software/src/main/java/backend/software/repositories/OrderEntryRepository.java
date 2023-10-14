package backend.software.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import backend.software.models.OrderEntry;

@Repository
public interface OrderEntryRepository extends JpaRepository<OrderEntry, Long>{
    
}
