package com.example.rento.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.rento.dto.request.AuthRequest;
import com.example.rento.dto.response.AuthResponse;
import com.example.rento.dto.response.JwtUtil;
import com.example.rento.entity.User;
import com.example.rento.repository.UserRepository;
import com.example.rento.service.CustomUserDetailsService;

@RestController
@RequestMapping("api/auth")
public class AuthController {


	private static final Logger LOGGER = LoggerFactory.getLogger(AuthController.class);

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private CustomUserDetailsService userDetailsService;
    
    @Autowired
    private UserRepository userRepository;
 
    @Autowired
    private JwtUtil jwtUtil;

	 @PostMapping("/authenticate")
	 public ResponseEntity<?> generateToken(@RequestBody AuthRequest authRequest) throws Exception {
		 LOGGER.info("generate token called");
	        try {
	            authenticationManager.authenticate(
	                    new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPassword()));
	            LOGGER.info("Authentication Successful.");
	        } catch (Exception ex) {
	            throw new Exception("Invalid username/password");
	        }
	        LOGGER.info("fetching user details.");
	        final UserDetails userDetails = userDetailsService.loadUserByUsername(authRequest.getEmail());
	        LOGGER.info("user details fetched successfully.");
	        final String jwt = jwtUtil.generateToken(userDetails);
	        return ResponseEntity.ok(new AuthResponse(jwt));
	    }
	 
	 @Autowired
	 private PasswordEncoder passwordEncoder;

	 @PostMapping("/register")
	 public ResponseEntity<?> registerUser(@RequestBody User user) {
		 LOGGER.info("registerUser called");
		 if(user == null) {
			 LOGGER.error("user detail required");
			   return (ResponseEntity<?>) ResponseEntity.badRequest();
		 }
	     user.setPassword(passwordEncoder.encode(user.getPassword()));
	     userRepository.save(user);
	     return ResponseEntity.ok("User registered successfully");
	 }

}
