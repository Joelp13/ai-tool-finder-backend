package com.example.ai_tool_finder.service;

import com.example.ai_tool_finder.model.Role;
import com.example.ai_tool_finder.model.User;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    // Temporary mock users (no DB yet)
    public User getAdminUser() {
        return new User("admin", Role.ADMIN);
    }

    public User getNormalUser() {
        return new User("user", Role.USER);
    }
}
