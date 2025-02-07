package com.edu.controller;

import com.edu.dto.AppointmentDTO;
import com.edu.dto.CreateAppointmentDTO;
import com.edu.service.appointment.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/appointments")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    @GetMapping
    public List<AppointmentDTO> getAppointments(@RequestParam Long userId) {
        return appointmentService.getAppointmentsForUser(userId);
    }

    @PostMapping
    public AppointmentDTO bookAppointment(@RequestBody CreateAppointmentDTO createAppointmentDTO) {
        return appointmentService.createAppointment(createAppointmentDTO);
    }

    @DeleteMapping("/{id}")
    public AppointmentDTO cancelAppointment(@PathVariable Long id) {
        return appointmentService.cancelAppointment(id);
    }
}
