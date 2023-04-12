package com.github.ruanbasilio.blog.controllers;

import com.github.ruanbasilio.blog.models.dtos.PostDto;
import com.github.ruanbasilio.blog.models.entities.Post;
import com.github.ruanbasilio.blog.services.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("post")
@RequiredArgsConstructor
public class PostController {

    private final PostService postService;

    @PostMapping
    public ResponseEntity save(@RequestBody PostDto request) {
        Post postToSave = request.toModel();

        Post post = postService.save(postToSave);

        return new ResponseEntity(post, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity getAllPosts () {
        List<Post> posts = postService.getAllPosts();

        return ResponseEntity.ok(posts);
    }

    @GetMapping(params = "id")
    public ResponseEntity getOnePost (@RequestParam("id") Long id) {
        Optional<Post> post = postService.getPost(id);

        if (post.isEmpty()) {
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.ok(post.get());
    }

    @DeleteMapping
    public ResponseEntity deletePost(@RequestParam("id") Long id) {
        postService.delete(id);

        return ResponseEntity.ok().build();
    }

}
