package com.github.ruanbasilio.blog.repositories;

import com.github.ruanbasilio.blog.models.entities.Subject;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SubjectRepository extends JpaRepository<Subject, Long> {
}
