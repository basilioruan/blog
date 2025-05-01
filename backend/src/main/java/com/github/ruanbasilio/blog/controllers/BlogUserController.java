package com.github.ruanbasilio.blog.controllers;

import com.github.ruanbasilio.blog.models.dtos.BlogUserDto;
import com.github.ruanbasilio.blog.models.entities.BlogUser;
import com.github.ruanbasilio.blog.services.BlogUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("user")
@RequiredArgsConstructor
public class BlogUserController {

    private final BlogUserService blogUserService;

    @PostMapping
    public ResponseEntity<HttpStatus> save(@RequestBody BlogUserDto blogUserDto) {
        this.blogUserService.save(blogUserDto);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping(params = "id")
    public ResponseEntity<BlogUser> getUserById(@RequestParam("id") Long id, HttpSession httpSession, Authentication authentication) {
        try {
            return ResponseEntity.ok(this.blogUserService.getUserById(id));
        } catch (NoSuchElementException e) {
            return ResponseEntity.noContent().build();
        }
    }

    @DeleteMapping(params = "id")
    public ResponseEntity<HttpStatus> deleteUserById(@RequestParam("id") Long id) {
        try {
            this.blogUserService.deleteById(id);
            return ResponseEntity.ok().build();
        } catch (NoSuchElementException e) {
            return ResponseEntity.noContent().build();
        }
    }

}
