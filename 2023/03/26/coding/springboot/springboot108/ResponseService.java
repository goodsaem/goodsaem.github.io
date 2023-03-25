package io.github.goodsaem.api.service;

import io.github.goodsaem.api.response.Response;
import lombok.Getter;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class ResponseService {

    @Getter
    public enum ReturnResponse {
        SUCCESS(0, "Success."),
        FAIL(-1, "Fail.");

        int returnCode;
        String returnMessage;

        ReturnResponse(int returnCode, String returnMessage) {
            this.returnCode = returnCode;
            this.returnMessage = returnMessage;
        }
    }

    public <T> Response<T> getResult(String key, Object obj) {
        Response<T> result = new Response<>();
        Map<String,Object> map = new HashMap<>();
        map.put(key,obj);

        if("".equals(key)) {
            result.setData((T) obj);
        } else {
            result.setData((T) map);
        }

        result.setResult(true);
        result.setResultCode(ReturnResponse.SUCCESS.getReturnCode());
        result.setMessage(ReturnResponse.SUCCESS.getReturnMessage());

        return result;
    }

    public Response getSuccessResult() {
        Response result = new Response();
        result.setResult(true);
        result.setResultCode(ReturnResponse.SUCCESS.getReturnCode());
        result.setMessage(ReturnResponse.SUCCESS.getReturnMessage());
        return result;
    }

    public Response getFailResult(String message) {
        Response result = new Response();
        result.setResult(false);
        result.setResultCode(ReturnResponse.FAIL.getReturnCode());
        result.setMessage(ReturnResponse.FAIL.getReturnMessage() + " : " + message);
        return result;
    }
}