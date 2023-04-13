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
import java.util.Optional;

@RestController
@RequestMapping("subject")
@RequiredArgsConstructor
public class SubjectController {

    private final SubjectService subjectService;

    @PostMapping
    public ResponseEntity save (@RequestBody SubjectDto request) {
        Subject subjectToSave = request.toModel();

        Subject subject = subjectService.save(subjectToSave);

        return new ResponseEntity(subject, HttpStatus.CREATED);
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
        Optional<Subject> subject = subjectService.getOneSubject(id);

        if (subject.isEmpty()) {
            return ResponseEntity.noContent().build();
        }

        return new ResponseEntity(subject, HttpStatus.OK);
    }

    @DeleteMapping
    public void delete (@RequestParam("id") Long id) {
        subjectService.delete(id);
    }
}
