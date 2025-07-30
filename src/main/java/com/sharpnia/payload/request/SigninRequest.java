
package com.sharpnia.payload.request;

import jakarta.validation.constraints.NotBlank;

public class SigninRequest {
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @NotBlank
    private String email;
    @NotBlank
    private String password;



    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
