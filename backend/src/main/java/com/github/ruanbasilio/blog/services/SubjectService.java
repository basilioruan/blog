package com.github.ruanbasilio.blog.services;

import com.github.ruanbasilio.blog.models.entities.Subject;
import com.github.ruanbasilio.blog.repositories.SubjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class SubjectService {

    private final SubjectRepository subjectRepository;

    public Subject save (Subject subject) {
        return subjectRepository.save(subject);
    }

    public List<Subject> getAllSubjects () {
        return subjectRepository.findAll();
    }

    public Optional<Subject> getOneSubject (Long id) {
        return subjectRepository.findById(id);
    }

    public void delete (Long id) {
        try {
            Optional<Subject> subject = subjectRepository.findById(id);
            subjectRepository.delete(subject.get());
        } catch (NoSuchElementException e) {
            throw e;
        }
    }
}
