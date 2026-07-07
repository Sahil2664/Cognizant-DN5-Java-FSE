package com.cognizant.controller;

import com.cognizant.model.JwtResponse;
import com.cognizant.model.UserCredentials;
import com.cognizant.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationController {

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/authenticate")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody UserCredentials credentials) {
        // Simple hardcoded authentication for the exercise
        if ("admin".equals(credentials.getUsername()) && "password".equals(credentials.getPassword())) {
            String token = jwtUtil.generateToken(credentials.getUsername());
            return ResponseEntity.ok(new JwtResponse(token));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }
}
