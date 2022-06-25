package com.portfolio.crud.security;

public class AuthResponse {
    private String email;
    private String accessToken;


    public AuthResponse() {
    }


    public AuthResponse(String email, String accessToken) {
        this.email = email;
        this.accessToken = accessToken;
    }


    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAccessToken() {
        return this.accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

}
