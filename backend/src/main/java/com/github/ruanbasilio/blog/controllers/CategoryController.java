package com.github.ruanbasilio.blog.controllers;

import com.github.ruanbasilio.blog.models.dtos.CategoryDto;
import com.github.ruanbasilio.blog.models.entities.Category;
import com.github.ruanbasilio.blog.models.entities.Subject;
import com.github.ruanbasilio.blog.services.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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

    @PutMapping
    public ResponseEntity edit (@RequestBody Category request) {
        categoryService.save(request);

        return ResponseEntity.ok().build();
    }

    @GetMapping
    public ResponseEntity getAllSubjects () {
        List<Category> categories = categoryService.getAllCategories();

        return new ResponseEntity(categories, HttpStatus.OK);
    }

    @GetMapping(params = "id")
    public ResponseEntity getOneSubjects (@RequestParam("id") Long id) {
        Optional<Category> category = categoryService.getOneCategory(id);

        if (category.isEmpty()) {
            return ResponseEntity.noContent().build();
        }

        return new ResponseEntity(category, HttpStatus.OK);
    }

    @DeleteMapping
    public void delete (@RequestParam("id") Long id) {
        categoryService.delete(id);
    }
}
