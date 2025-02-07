package com.edu.repository;

import com.edu.entity.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

    List<Appointment> findByUserId(Long userId);

    boolean existsByAppointmentDateTimeAndCancelledFalse(LocalDateTime appointmentDateTime);
}
