package com.edu.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@RestController
@RequestMapping("/slots")
public class SlotController {

    @GetMapping
    public List<LocalDateTime> getAvailableSlots() {
        LocalDateTime now = LocalDateTime.now().plusHours(1);
        return IntStream.range(0, 10)
                .mapToObj(i -> now.plusHours(i))
                .collect(Collectors.toList());
    }
}
