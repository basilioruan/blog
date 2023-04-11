package com.github.ruanbasilio.blog.models.entities;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 100, nullable = false)
    private String name;

}
