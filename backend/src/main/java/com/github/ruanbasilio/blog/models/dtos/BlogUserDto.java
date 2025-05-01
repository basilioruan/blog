package com.github.ruanbasilio.blog.models.dtos;

import com.github.ruanbasilio.blog.models.entities.BlogUser;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BlogUserDto {

    private Long id;

    private String name;

    private String email;

    private String password;

    public BlogUser toModel() {
        return BlogUser.builder()
                .id(this.id)
                .name(this.name)
                .email(this.email)
                .password(this.password)
                .build();
    }
}
