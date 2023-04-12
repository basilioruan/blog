package com.github.ruanbasilio.blog.repositories;

import com.github.ruanbasilio.blog.models.entities.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {
}
