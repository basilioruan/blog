package com.github.ruanbasilio.blog.controllers;

import com.github.ruanbasilio.blog.models.dtos.PostDto;
import com.github.ruanbasilio.blog.models.entities.Post;
import com.github.ruanbasilio.blog.services.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@RestController
@RequestMapping("post")
@RequiredArgsConstructor
public class PostController {

    private final PostService postService;

    @PostMapping
    public ResponseEntity save(@RequestBody PostDto request) {
        Post postToSave = request.toModel();

        postService.save(postToSave);

        return new ResponseEntity(HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity edit(@RequestBody Post request) {
        postService.save(request);

        return ResponseEntity.ok().build();
    }

    @GetMapping
    public ResponseEntity getAllPosts (@PageableDefault(page = 0, size = 1, sort = "id", direction = Sort.Direction.ASC) Pageable pageable) {
        Page<Post> posts = postService.getAllPosts(pageable);

        return ResponseEntity.ok(posts);
    }

    @GetMapping(params = "id")
    public ResponseEntity getOnePost (@RequestParam("id") Long id) {
        try {
            Optional<Post> post = postService.getPost(id);

            return ResponseEntity.ok(post.get());
        } catch (NoSuchElementException e) {
            return ResponseEntity.noContent().build();
        }
    }

    @DeleteMapping
    public ResponseEntity deletePost(@RequestParam("id") Long id) {
        try {
            postService.delete(id);

            return ResponseEntity.ok().build();
        } catch (NoSuchElementException e) {
            return ResponseEntity.noContent().build();
        }
    }

}
