package com.github.ruanbasilio.blog.models.dtos;

import lombok.Data;

@Data
public class LoginCredentialsDto {

    private String email;

    private String password;
}
