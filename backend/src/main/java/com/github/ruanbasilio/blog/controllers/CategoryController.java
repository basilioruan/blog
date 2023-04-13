package com.github.ruanbasilio.blog.controllers;

import com.github.ruanbasilio.blog.models.dtos.CategoryDto;
import com.github.ruanbasilio.blog.models.entities.Category;
import com.github.ruanbasilio.blog.services.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@RestController
@RequestMapping("category")
@RequiredArgsConstructor
public class CategoryController {

    private final CategoryService categoryService;

    @PostMapping
    public ResponseEntity save (@RequestBody CategoryDto request) {
        Category categoryToSave = request.toModel();

        categoryService.save(categoryToSave);

        return new ResponseEntity(HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity edit (@RequestBody Category request) {
        categoryService.save(request);

        return ResponseEntity.ok().build();
    }

    @GetMapping
    public ResponseEntity getAllSubjects () {
        List<Category> categories = categoryService.getAllCategories();

        return ResponseEntity.ok(categories);
    }

    @GetMapping(params = "id")
    public ResponseEntity getOneSubjects (@RequestParam("id") Long id) {
        try {
            Optional<Category> category = categoryService.getOneCategory(id);

            return ResponseEntity.ok(category);
        } catch (NoSuchElementException e) {
            return ResponseEntity.noContent().build();
        }
    }

    @DeleteMapping
    public ResponseEntity delete (@RequestParam("id") Long id) {
        try {
            categoryService.delete(id);

            return ResponseEntity.ok().build();
        } catch (NoSuchElementException e) {
            return ResponseEntity.noContent().build();
        }
    }
}
