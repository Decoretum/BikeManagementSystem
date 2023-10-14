package backend.software.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import backend.software.models.Orders;

@Repository
public interface OrderRepostitory extends JpaRepository<Orders, Long> {
    
}
