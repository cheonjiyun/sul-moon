package org.jduenv.sulmoon.service;

import org.jduenv.sulmoon.dto.ResponseDto;
import org.jduenv.sulmoon.dto.SignUpDto;
import org.jduenv.sulmoon.entity.UserEntity;
import org.jduenv.sulmoon.exception.ApiException;
import org.jduenv.sulmoon.exception.ExceptionEnum;
import org.jduenv.sulmoon.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseStatus;

@Service
public class AuthService {
    @Autowired
    UserRepository userRepository;

    public ResponseDto<Object> signUp(SignUpDto dto) {
        String id = dto.getId();
        String password = dto.getPassword();
        String confirmPassword = dto.getConfirmPassword();
        String phone = dto.getPhone();

        if (userRepository.existsById(id)) {
            throw new ApiException(ExceptionEnum.ID_DUPLICATION);
        }

        if (!password.equals(confirmPassword)) {
            throw new ApiException(ExceptionEnum.PASSWORD_NOT_MATH);
        }

        if (!password.matches("^(?!.*\\s)(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!\"#$%&'()*+,-./:;<=>?@[\\\\]^_`{|}~])[A-Za-z\\d!\"#$%&'()*+,-./:;<=>?@[\\\\]^_`{|}~]{8,20}$")) {
            throw new ApiException(ExceptionEnum.PASSWORD_NOT_VALID);
        }

        UserEntity userEntity = new UserEntity(dto);

        try {
            userRepository.save(userEntity);
        } catch (Exception e) {
            return ResponseDto.setFailed("데이터베이스 연결에 실패했습니다.");
        }

        return ResponseDto.setSuccess("회원가입을 성공했습니다.");
    }
}
