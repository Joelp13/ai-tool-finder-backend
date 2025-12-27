package com.example.ai_tool_finder.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @GetMapping("/user/test")
    public String userTest() {
        return "User access granted";
    }
}
