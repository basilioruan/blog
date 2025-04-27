package com.github.ruanbasilio.blog.security;

import com.github.ruanbasilio.blog.models.dtos.BlogUserDto;
import com.github.ruanbasilio.blog.models.entities.BlogUser;
import com.github.ruanbasilio.blog.services.BlogUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import utils.SecurityUtils;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Objects;

@Component
@RequiredArgsConstructor
public class SocialLoginSuccessHandler extends SavedRequestAwareAuthenticationSuccessHandler {

    private final BlogUserService blogUserService;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws ServletException, IOException {
        OAuth2AuthenticationToken oAuth2AuthenticationToken = (OAuth2AuthenticationToken) authentication;
        OAuth2User oAuth2User = oAuth2AuthenticationToken.getPrincipal();

        String email = oAuth2User.getAttribute("email");
        String name = oAuth2User.getAttribute("name");

        BlogUser blogUser = this.blogUserService.getUserByEmail(email);

        if (Objects.isNull(blogUser)) {
            this.createBlogUserDb(name, email);
        } else {
            this.updateBlogUserDb(blogUser, name);
        }

        authentication = new CustomAuthentication(blogUser);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        super.onAuthenticationSuccess(request, response, authentication);
    }

    private void updateBlogUserDb(BlogUser blogUser, String name) {
        blogUser.setName(name);
        this.blogUserService.update(blogUser);
    }

    private void createBlogUserDb(String name, String email) {
        BlogUserDto blogUserDto = BlogUserDto.builder()
                .name(name)
                .email(email)
                .password(SecurityUtils.generateCommonLangPassword())
                .build();
        this.blogUserService.save(blogUserDto);
    }
}
