package com.github.ruanbasilio.blog.controllers;

import com.github.ruanbasilio.blog.models.dtos.SubjectDto;
import com.github.ruanbasilio.blog.models.entities.Subject;
import com.github.ruanbasilio.blog.services.SubjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
