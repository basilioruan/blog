package com.github.ruanbasilio.blog.repositories;

import com.github.ruanbasilio.blog.models.entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
