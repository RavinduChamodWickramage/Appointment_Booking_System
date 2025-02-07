package com.edu.service.appointment;

import com.edu.dto.AppointmentDTO;
import com.edu.dto.CreateAppointmentDTO;
import com.edu.entity.Appointment;
import com.edu.entity.User;
import com.edu.repository.AppointmentRepository;
import com.edu.repository.UserRepository;
import com.edu.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtil jwtUtil;

    public List<AppointmentDTO> getAppointmentsForUser(Long userId) {
        List<Appointment> appointments = appointmentRepository.findByUserId(userId);
        return appointments.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public AppointmentDTO createAppointment(CreateAppointmentDTO createAppointmentDTO) {
        if (appointmentRepository.existsByAppointmentDateTimeAndCancelledFalse(createAppointmentDTO.getAppointmentDateTime())) {
            throw new RuntimeException("Time slot is already booked");
        }

        User user = userRepository.findById(createAppointmentDTO.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        Appointment appointment = new Appointment();
        appointment.setUser(user);
        appointment.setAppointmentDateTime(createAppointmentDTO.getAppointmentDateTime());
        appointment.setCancelled(false);

        Appointment savedAppointment = appointmentRepository.save(appointment);

        return convertToDTO(savedAppointment);
    }

    public AppointmentDTO cancelAppointment(Long appointmentId) {
        Appointment appointment = appointmentRepository.findById(appointmentId)
                .orElseThrow(() -> new RuntimeException("Appointment not found"));

        appointment.setCancelled(true);
        Appointment cancelledAppointment = appointmentRepository.save(appointment);

        return convertToDTO(cancelledAppointment);
    }

    private AppointmentDTO convertToDTO(Appointment appointment) {
        AppointmentDTO dto = new AppointmentDTO();
        dto.setId(appointment.getId());
        dto.setUserId(appointment.getUser().getId());
        dto.setAppointmentDateTime(appointment.getAppointmentDateTime());
        dto.setCancelled(appointment.isCancelled());
        return dto;
    }
}
