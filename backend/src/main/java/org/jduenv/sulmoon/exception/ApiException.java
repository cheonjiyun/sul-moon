package org.jduenv.sulmoon.exception;

import lombok.Getter;

@Getter
public class ApiException extends RuntimeException {
    private final ExceptionEnum erorr;

    public ApiException(ExceptionEnum e){
        super(e.getMessage());
        this.erorr = e;
    }
}
