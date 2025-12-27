package com.example.ai_tool_finder.specification;

import com.example.ai_tool_finder.model.PricingType;
import com.example.ai_tool_finder.model.Tool;
import org.springframework.data.jpa.domain.Specification;

public class ToolSpecification {

    public static Specification<Tool> filterBy(String category, String pricing, Double minRating) {
        return (root, query, cb) -> {
            var predicates = cb.conjunction();

            if (category != null && !category.isEmpty()) {
                predicates = cb.and(predicates, cb.equal(root.get("category"), category));
            }

            if (pricing != null && !pricing.isEmpty()) {
                try {
                    PricingType pt = PricingType.valueOf(pricing.toUpperCase());
                    predicates = cb.and(predicates, cb.equal(root.get("pricingType"), pt));
                } catch (IllegalArgumentException e) {
                    // if invalid pricing enum provided, match nothing
                    predicates = cb.and(predicates, cb.disjunction());
                }
            }

            if (minRating != null) {
                predicates = cb.and(predicates, cb.greaterThanOrEqualTo(root.get("averageRating"), minRating));
            }

            return predicates;
        };
    }
}

