package com.github.ruanbasilio.blog.security;

import com.github.ruanbasilio.blog.models.entities.BlogUser;
import com.github.ruanbasilio.blog.services.BlogUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Objects;

@Component
@RequiredArgsConstructor
public class CustomAuthenticationProvider implements AuthenticationProvider {

    private final BlogUserService blogUserService;

    private final PasswordEncoder passwordEncoder;

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String email = authentication.getName();
        String rawPassword = authentication.getCredentials().toString();

        return authentication(email, rawPassword);
    }

    public Authentication authentication(String email, String rawPassword) {
        BlogUser blogUser = this.blogUserService.getUserByEmail(email);
        if (Objects.isNull(blogUser)) {
            throw this.getNotFindUserException();
        }

        boolean isCorrectPassword = passwordEncoder.matches(rawPassword, blogUser.getPassword());

        if (isCorrectPassword) {
            return new CustomAuthentication(blogUser);
        }

        throw getNotFindUserException();
    }

    private UsernameNotFoundException getNotFindUserException() {
        return new UsernameNotFoundException("E-mail ou senha incorreto. Por favor tente novamente.");
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return authentication.isAssignableFrom(UsernamePasswordAuthenticationToken.class);
    }
}
