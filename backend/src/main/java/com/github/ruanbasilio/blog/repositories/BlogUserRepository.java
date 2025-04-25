package com.github.ruanbasilio.blog.repositories;

import com.github.ruanbasilio.blog.models.entities.BlogUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BlogUserRepository extends JpaRepository<BlogUser, Long> {

    BlogUser findByEmail(String email);

}
