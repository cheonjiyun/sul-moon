package org.jduenv.sulmoon.controller;

import org.jduenv.sulmoon.dto.ResponseDto;
import org.jduenv.sulmoon.dto.SignUpDto;
import org.jduenv.sulmoon.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.ErrorResponse;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired AuthService authService;
    @PostMapping("/sign-up")
    public ResponseDto<?> signUp(@RequestBody SignUpDto requestBody){
        return authService.signUp(requestBody);
    }

    @ResponseStatus(value = HttpStatus.BAD_REQUEST, reason = "id중복d")
    static class BadRequestException extends RuntimeException {
        public BadRequestException() {
            super("Input is invalid");
        }
    }
}
