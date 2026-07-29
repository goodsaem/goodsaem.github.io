package io.github.goodsaem.api.response;

import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Response<T> {
    @ApiModelProperty(value = "요청 처리 결과 : true or false")
    private boolean result;

    @ApiModelProperty(value ="요청 처리 코드 0 성공 , -1 오류")
    private int resultCode;

    @ApiModelProperty(value ="결과 메시지")
    private String message;

    @ApiModelProperty(value ="리턴 데이터")
    private T data;
}