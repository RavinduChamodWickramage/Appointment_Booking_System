package com.edu.dto;

import lombok.Data;

@Data
public class SignupRequest {
    private String name;
    private String username;
    private String password;
    private String role;
}
