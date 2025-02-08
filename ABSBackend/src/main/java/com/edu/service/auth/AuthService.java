package com.edu.service.auth;

import com.edu.dto.SignupRequest;
import com.edu.dto.UserDto;
import com.edu.entity.User;
import com.edu.enums.Role;
import com.edu.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public boolean hasUserWithEmail(String email) {
        return userRepository.findByUsername(email).isPresent();
    }

    public UserDto createUser(SignupRequest signupRequest) {
        User user = new User();
        user.setUsername(signupRequest.getUsername());
        user.setPassword(bCryptPasswordEncoder.encode(signupRequest.getPassword()));
        user.setRole(Role.valueOf(signupRequest.getRole().toUpperCase()));

        user = userRepository.save(user);

        return convertToDto(user);
    }

    private UserDto convertToDto(User user) {
        UserDto userDto = new UserDto();
        userDto.setId(user.getId());
        userDto.setUsername(user.getUsername());
        userDto.setRole(user.getRole().name());
        return userDto;
    }
}
