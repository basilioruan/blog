package com.github.ruanbasilio.blog.models.entities;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Data
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false, length = 100)
    private String title;

    @ManyToOne
    private Category category;

    @Column(nullable = false, length = 150)
    private String description;

    @ManyToOne
    private Subject subject;

    @Column(nullable = false)
    private LocalDate date;

    @Column
    private String image;

    @Column(columnDefinition = "boolean default false")
    private boolean highlight;

    @Column(nullable = false, length = 100)
    private String author;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String content;
}
