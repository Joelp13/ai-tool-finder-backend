package com.example.ai_tool_finder.controller;

import com.example.ai_tool_finder.model.Tool;
import com.example.ai_tool_finder.repository.ToolRepository;
import com.example.ai_tool_finder.specification.ToolSpecification;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tools")
public class ToolController {

    private final ToolRepository toolRepository;

    public ToolController(ToolRepository toolRepository) {
        this.toolRepository = toolRepository;
    }

    @GetMapping
    public List<Tool> getTools(
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String pricing,
            @RequestParam(required = false, name = "rating") Double rating
    ) {
        Specification<Tool> spec = ToolSpecification.filterBy(category, pricing, rating);
        return toolRepository.findAll(spec);
    }
}

