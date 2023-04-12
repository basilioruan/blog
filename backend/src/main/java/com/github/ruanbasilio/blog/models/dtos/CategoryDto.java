package com.github.ruanbasilio.blog.models.dtos;

import com.github.ruanbasilio.blog.models.entities.Category;
import lombok.Data;

@Data
public class CategoryDto {
    private String name;

    public Category toModel() {
        Category category = new Category();

        category.setName(name);

        return category;
    }
}
