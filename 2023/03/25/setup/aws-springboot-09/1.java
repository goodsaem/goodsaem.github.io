package goodsaem.github.io.hello;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HelloController {

    private final String MSG="안녕하세요 좋은 선생님 goodsaem! 입니다.";

    @GetMapping(value = "/goodsaem/string")
    @ResponseBody
    public String getString() {
        return MSG;
    }
}