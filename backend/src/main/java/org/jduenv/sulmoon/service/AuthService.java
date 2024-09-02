package org.jduenv.sulmoon.service;

import org.jduenv.sulmoon.dto.ResponseDto;
import org.jduenv.sulmoon.dto.SignUpDto;
import org.jduenv.sulmoon.entity.UserEntity;
import org.jduenv.sulmoon.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    @Autowired UserRepository userRepository;
    public ResponseDto<Object> signUp(SignUpDto dto){
        String id = dto.getId();
        String password = dto.getPassword();
        String confirmPassword = dto.getConfirmPassword();
        String phone = dto.getPhone();

        try{
            if(userRepository.existsById(id)){
                return ResponseDto.setFailed("중복된 id입니다.");
            }
        }catch (Exception e){
            return ResponseDto.setFailed("데이터베이스 연결에 실패했습니다.");
        }

        if(!password.equals(confirmPassword)){
            return ResponseDto.setFailed("비밀번호가 일치하지 않습니다.");
        }

        if(!password.matches("^(?!.*\\s)(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!\"#$%&'()*+,-./:;<=>?@[\\\\]^_`{|}~])[A-Za-z\\d!\"#$%&'()*+,-./:;<=>?@[\\\\]^_`{|}~]{8,20}$")){
            return ResponseDto.setFailed("비밀번호는 특수문자+숫자+대문자+소문자로 구성된 8~20글자여야 합니다.");
        }

        UserEntity userEntity = new UserEntity(dto);

        try{
            userRepository.save(userEntity);
        }catch (Exception e){
            return ResponseDto.setFailed("데이터베이스 연결에 실패했습니다.");
        }

        return ResponseDto.setSuccess("회원가입을 성공했습니다.");
    }
}
