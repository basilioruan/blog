package com.github.ruanbasilio.blog.services;

import com.github.ruanbasilio.blog.models.entities.ImageData;
import com.github.ruanbasilio.blog.repositories.ImageDataRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import utils.ImageUtils;

import javax.transaction.Transactional;
import java.io.IOException;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ImageDataService {

    private final ImageDataRepository imageDataRepository;

    public void uploadImage(MultipartFile file) throws IOException {
        ImageData imageData = ImageData.builder()
                .name(file.getOriginalFilename())
                .type(file.getContentType())
                .imagedata(ImageUtils.compressImage(file.getBytes())).build();
        imageDataRepository.save(imageData);
    }

    @Transactional
    public ImageData findImageInfoById(Long id) {
        Optional<ImageData> dbImage = imageDataRepository.findById(id);

        return dbImage.map(imageData -> ImageData.builder()
                .id(imageData.getId())
                .name(imageData.getName())
                .type(imageData.getType())
                .imagedata(ImageUtils.decompressImage(imageData.getImagedata())).build()).orElse(null);

    }

    @Transactional
    public byte[] findImageById(Long id) {
        Optional<ImageData> dbImage = imageDataRepository.findById(id);

        return dbImage.map(imageData -> ImageUtils.decompressImage(imageData.getImagedata())).orElse(null);

    }
}
