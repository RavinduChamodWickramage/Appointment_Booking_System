package com.edu.controller;

import com.edu.dto.AppointmentDTO;
import com.edu.service.appointment.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    private AppointmentService appointmentService;

    @GetMapping("/appointments")
    public List<AppointmentDTO> getAllAppointments() {
        return appointmentService.getAllAppointments();
    }
}
