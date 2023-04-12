package com.github.ruanbasilio.blog.models.dtos;

import com.github.ruanbasilio.blog.models.entities.Category;
import com.github.ruanbasilio.blog.models.entities.Post;
import com.github.ruanbasilio.blog.models.entities.Subject;
import lombok.Data;

import java.time.LocalDate;

@Data
public class PostDto {

    private String title;

    private Category category;

    private String description;

    private Subject subject;

    private String image;

    private boolean highlight;

    public Post toModel() {
        var post = new Post();

        post.setTitle(title);
        post.setCategory(category);
        post.setDescription(description);
        post.setSubject(subject);
        post.setDate(LocalDate.now());
        post.setImage(image);
        post.setHighlight(highlight);

        return post;
    }
}
