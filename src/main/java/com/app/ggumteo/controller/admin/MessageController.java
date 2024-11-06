package com.app.ggumteo.controller.admin;

import net.nurigo.java_sdk.api.Message;
import net.nurigo.java_sdk.exceptions.CoolsmsException;
import org.json.simple.JSONObject;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/report/messages")
public class MessageController {

    private final String apiKey = "";       // 실제 API 키
    private final String apiSecret = ""; // 실제 API 비밀키

    @PostMapping("/send")
    public Map<String, Object> sendMessage(@RequestBody Map<String, String> requestData) {
        String to = requestData.get("to");     // 수신자 번호
        String text = requestData.get("text"); // 발송할 메시지 내용
        Message coolsms = new Message(apiKey, apiSecret);

        HashMap<String, String> params = new HashMap<>();
        params.put("to", to);
        params.put("from", "01090837645"); // 발신자 번호 (인증된 번호 사용)
        params.put("type", "SMS");
        params.put("text", text);
        params.put("app_version", "test app 1.2");

        Map<String, Object> response = new HashMap<>();
        try {
            JSONObject result = (JSONObject) coolsms.send(params);
            response.put("success", true);
            response.put("result", result);
        } catch (CoolsmsException e) {
            response.put("success", false);
            response.put("error", e.getMessage());
        }
        return response;
    }

    @PostMapping("/textReport/send")
    public Map<String, Object> sendTextMessage(@RequestBody Map<String, String> requestData) {
        String to = requestData.get("to");     // 수신자 번호
        String text = requestData.get("text"); // 발송할 메시지 내용
        Message coolsms = new Message(apiKey, apiSecret);

        HashMap<String, String> params = new HashMap<>();
        params.put("to", to);
        params.put("from", "01090837645"); // 발신자 번호 (인증된 번호 사용)
        params.put("type", "SMS");
        params.put("text", text);
        params.put("app_version", "test app 1.2");

        Map<String, Object> response = new HashMap<>();
        try {
            JSONObject result = (JSONObject) coolsms.send(params);
            response.put("success", true);
            response.put("result", result);
        } catch (CoolsmsException e) {
            response.put("success", false);
            response.put("error", e.getMessage());
        }
        return response;
    }
}

