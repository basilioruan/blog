package com.github.ruanbasilio.blog.controllers;

import com.github.ruanbasilio.blog.models.dtos.SubjectDto;
import com.github.ruanbasilio.blog.models.entities.Subject;
import com.github.ruanbasilio.blog.services.SubjectService;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@RestController
@RequestMapping("subject")
@RequiredArgsConstructor
public class SubjectController {

    private final SubjectService subjectService;

    @PostMapping
    public ResponseEntity save (@RequestBody SubjectDto request) {
        Subject subjectToSave = request.toModel();

        subjectService.save(subjectToSave);

        return new ResponseEntity(HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity edit (@RequestBody Subject request) {
        subjectService.save(request);

        return ResponseEntity.ok().build();
    }

    @GetMapping
    public ResponseEntity getAllSubjects () {
        List<Subject> subjects = subjectService.getAllSubjects();

        return new ResponseEntity(subjects, HttpStatus.OK);
    }

    @GetMapping(params = "id")
    public ResponseEntity getOneSubjects (@RequestParam("id") Long id) {
        try {
            Optional<Subject> subject = subjectService.getOneSubject(id);

            return ResponseEntity.ok(subject.get());
        } catch (NoSuchElementException e) {
            return ResponseEntity.noContent().build();
        }
    }

    @DeleteMapping
    public ResponseEntity delete (@RequestParam("id") Long id) {
        try {
            subjectService.delete(id);

            return ResponseEntity.ok().build();
        } catch (NoSuchElementException e) {
            return ResponseEntity.noContent().build();
        }
    }
}
