package com.github.ruanbasilio.blog.services;

import com.github.ruanbasilio.blog.security.CustomAuthenticationProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final CustomAuthenticationProvider customAuthenticationProvider;

    public Authentication authenticate(String email, String password, HttpSession session) {
        Authentication authentication = this.customAuthenticationProvider.authentication(email, password);
        session.setAttribute("user", email);

        return authentication;
    }

}
