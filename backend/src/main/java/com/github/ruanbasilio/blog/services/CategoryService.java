package com.github.ruanbasilio.blog.services;

import com.github.ruanbasilio.blog.models.entities.Category;
import com.github.ruanbasilio.blog.repositories.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CategoryService {

    private final CategoryRepository categoryRepository;

    public Category save (Category category) {
        return categoryRepository.save(category);
    }

    public List<Category> getAllCategories () {
        return categoryRepository.findAll();
    }

    public Optional<Category> getOneCategory (Long id) {
        return categoryRepository.findById(id);
    }

    public void delete (Long id) {
        Optional<Category> category = categoryRepository.findById(id);

        if (!category.isEmpty()) {
            categoryRepository.delete(category.get());
        }
    }
}
