package com.github.ruanbasilio.blog.services;

import com.github.ruanbasilio.blog.models.entities.Post;
import com.github.ruanbasilio.blog.repositories.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PostService {

    private final PostRepository postRepository;

    public Post save(Post post) {
        return postRepository.save(post);
    }

    public Page<Post> getAllPosts(Pageable pageable) {
        return postRepository.findAll(pageable);
    }

    public Optional<Post> getPost(Long id) {
        return postRepository.findById(id);
    }

    public void delete(Long id) {
        try {
            Optional<Post> post = getPost(id);

            postRepository.delete(post.get());
        } catch (NoSuchElementException e) {
            throw e;
        }
    }
}
