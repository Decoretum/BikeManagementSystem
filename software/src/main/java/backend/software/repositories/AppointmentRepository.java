package backend.software.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import backend.software.models.Appointment;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long>  {
    
}