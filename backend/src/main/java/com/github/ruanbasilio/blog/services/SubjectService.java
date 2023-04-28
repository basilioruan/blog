package com.github.ruanbasilio.blog.services;

import com.github.ruanbasilio.blog.models.entities.Subject;
import com.github.ruanbasilio.blog.repositories.SubjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SubjectService {

    private final SubjectRepository subjectRepository;

    public Subject save (Subject subject) {
        return subjectRepository.save(subject);
    }
}
