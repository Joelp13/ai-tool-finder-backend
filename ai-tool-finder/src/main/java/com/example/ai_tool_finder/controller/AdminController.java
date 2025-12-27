package com.example.ai_tool_finder.controller;

import com.example.ai_tool_finder.model.Role;
import com.example.ai_tool_finder.model.User;
import com.example.ai_tool_finder.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
public class AdminController {

    private final UserService userService;

    public AdminController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/test")
    public String adminTest() {
        User user = userService.getAdminUser();

        if (user.getRole() != Role.ADMIN) {
            return "Access denied";
        }
        return "Admin access granted";
    }
}
