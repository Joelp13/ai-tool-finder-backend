package com.example.ai_tool_finder.dto;

import com.example.ai_tool_finder.model.ReviewStatus;
import jakarta.validation.constraints.NotNull;

public class ReviewStatusUpdateDto {

    @NotNull(message = "status must be provided")
    private ReviewStatus status;

    public ReviewStatusUpdateDto() {}

    public ReviewStatus getStatus() { return status; }
    public void setStatus(ReviewStatus status) { this.status = status; }
}

