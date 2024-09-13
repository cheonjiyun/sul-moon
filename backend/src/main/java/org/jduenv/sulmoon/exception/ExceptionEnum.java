package org.jduenv.sulmoon.exception;

import lombok.Getter;
import lombok.ToString;
import org.springframework.http.HttpStatus;

@Getter
@ToString
public enum ExceptionEnum {

    ID_DUPLICATION(HttpStatus.INTERNAL_SERVER_ERROR, "U001","ID중복입니다."),
    PASSWORD_NOT_MATH(HttpStatus.INTERNAL_SERVER_ERROR, "U002","비밀번호가 일치하지 않습니다."),
    PASSWORD_NOT_VALID(HttpStatus.INTERNAL_SERVER_ERROR, "U003","비밀번호는 특수문자+숫자+대문자+소문자로 구성된 8~20글자여야 합니다.");


    private final HttpStatus status;
    private final String code;
    private String message;

    ExceptionEnum(HttpStatus status, String code){
        this.status = status;
        this.code = code;
    }

    ExceptionEnum(HttpStatus status, String code, String message){
        this.status = status;
        this.code = code;
        this.message = message;
    }
}
