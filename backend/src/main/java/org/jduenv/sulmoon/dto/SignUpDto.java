package org.jduenv.sulmoon.dto;

import lombok.Data;

@Data
public class SignUpDto {
    private String id;
    private String password;
    private String confirmPassword;
    private String phone;
}
