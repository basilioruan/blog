package com.github.ruanbasilio.blog.controllers;

import com.github.ruanbasilio.blog.models.dtos.CategoryDto;
import com.github.ruanbasilio.blog.models.entities.Category;
import com.github.ruanbasilio.blog.services.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("category")
@RequiredArgsConstructor
public class CategoryController {

    private final CategoryService categoryService;

    @PostMapping
    public ResponseEntity save (@RequestBody CategoryDto request) {
        Category categoryToSave = request.toModel();

        Category category = categoryService.save(categoryToSave);

        return new ResponseEntity(category, HttpStatus.CREATED);
    }
}
