package com.github.ruanbasilio.blog.services;

import com.github.ruanbasilio.blog.models.entities.Post;
import com.github.ruanbasilio.blog.repositories.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PostService {

    private final PostRepository postRepository;

    public Post save(Post post) {
        return postRepository.save(post);
    }

    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    public Optional<Post> getPost(Long id) {
        return postRepository.findById(id);
    }

    public void delete(Long id) {
        Optional<Post> post = postRepository.findById(id);

        if (!post.isEmpty()) {
            postRepository.delete(post.get());
        }
    }
}
