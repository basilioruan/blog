package com.github.ruanbasilio.blog.services;

import com.github.ruanbasilio.blog.models.dtos.BlogUserDto;
import com.github.ruanbasilio.blog.models.entities.BlogUser;
import com.github.ruanbasilio.blog.repositories.BlogUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.NoSuchElementException;
import java.util.Objects;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BlogUserService {

    private final BlogUserRepository blogUserRepository;

    public BlogUser save(BlogUserDto dto) {
        if (Objects.isNull(dto)) {
            return null;
        }

        BlogUser blogUserToSave = dto.toModel();
        if (Objects.isNull(dto.getId())) {
            blogUserToSave.setCreationDate(LocalDateTime.now());
        } else {
            BlogUser blogUserFromDb = this.blogUserRepository.findById(dto.getId()).orElseThrow();
            blogUserToSave.setCreationDate(blogUserFromDb.getCreationDate());
            blogUserToSave.setUserImage(blogUserFromDb.getUserImage());
        }
        blogUserToSave.setLastUpdateDate(LocalDateTime.now());

        return this.blogUserRepository.save(blogUserToSave);
    }

    public BlogUser getUserByEmail(String email) {
        if (Objects.isNull(email) || email.isEmpty()) {
            return null;
        }

        return this.blogUserRepository.findByEmail(email);
    }

    public BlogUser getUserById(Long id) {
        if (Objects.isNull(id)) {
            return null;
        }

        Optional<BlogUser> blogUser = this.blogUserRepository.findById(id);

        if (blogUser.isEmpty()) {
            throw new NoSuchElementException();
        }

        return blogUser.get();
    }

    public void deleteById(Long id) {
        this.blogUserRepository.deleteById(id);
    }

}
