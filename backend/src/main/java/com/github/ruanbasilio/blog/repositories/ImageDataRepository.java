package com.github.ruanbasilio.blog.repositories;

import com.github.ruanbasilio.blog.models.entities.ImageData;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ImageDataRepository extends JpaRepository<ImageData, Long> {
    Optional<ImageData> findByName(String name);
}
