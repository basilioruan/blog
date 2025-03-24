package com.github.ruanbasilio.blog.controllers;

import com.github.ruanbasilio.blog.models.entities.ImageData;
import com.github.ruanbasilio.blog.services.ImageDataService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/image")
@RequiredArgsConstructor
public class ImageDataController {

    private final ImageDataService imageDataService;

    @PostMapping
    public ResponseEntity<String> uploadImage(@RequestParam("image") MultipartFile file) {
        try {
            imageDataService.uploadImage(file);

            return ResponseEntity.status(HttpStatus.OK)
                    .body("Image uploaded successfully");
        } catch (IOException ex) {
            return new ResponseEntity<>("Something went wrong while saving the image", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/info/{id}")
    public ResponseEntity<?> getImageInfoByName(@PathVariable("id") Long id) {
        ImageData image = imageDataService.findImageInfoById(id);

        return ResponseEntity.status(HttpStatus.OK)
                .body(image);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getImageByName(@PathVariable("id") Long id) {
        byte[] image = imageDataService.findImageById(id);

        return ResponseEntity.status(HttpStatus.OK)
                .contentType(MediaType.valueOf("image/png"))
                .body(image);
    }
}
