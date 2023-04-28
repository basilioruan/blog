package com.github.ruanbasilio.blog.models.dtos;

import com.github.ruanbasilio.blog.models.entities.Subject;
import lombok.Data;

@Data
public class SubjectDto {
    private String name;

    public Subject toModel() {
        Subject subject = new Subject();

        subject.setName(name);

        return subject;
    }
}
