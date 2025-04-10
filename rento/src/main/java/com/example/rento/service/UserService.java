package com.example.rento.service;
import org.springframework.stereotype.Service;

import com.example.rento.entity.User;
import com.example.rento.repository.UserRepository;

@Service
public class UserService {
    private final UserRepository userRepository;
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User signup(User user) {
        return userRepository.save(user);
    }

    public boolean login(String email, String password) {
        User user = userRepository.findByEmail(email);
        if (user != null && user.getPassword().equals(password)) {
            return true;
        }
        return false;
    }
}
