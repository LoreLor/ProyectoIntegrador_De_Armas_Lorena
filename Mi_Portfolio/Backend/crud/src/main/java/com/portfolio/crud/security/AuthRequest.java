package com.portfolio.crud.security;

import javax.validation.constraints.Email;

import org.hibernate.validator.constraints.Length;

public class AuthRequest {
    @Email
    @Length(min=8, max=30)
    private String email;
    @Length(min=8)
    private String password;


    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
