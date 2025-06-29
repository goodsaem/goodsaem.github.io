package io.github.goodsaem.api.controller.v1;

import io.github.goodsaem.api.entity.HCode;
import io.github.goodsaem.api.service.IHCodeService;
import io.github.goodsaem.api.store.DataStore;
import lombok.var;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class HCodeController {
    @Autowired
    private IHCodeService ihCodeService;

    @Autowired
    private DataStore dataStore;

    @GetMapping("/hcodes")
    public String findHcodes(Model model) {
        //var hcodes = (List<HCode>) ihCodeService.findAll();
        var hcodes = (List<HCode>) dataStore.getHCodeCache();
        model.addAttribute("hcodes",hcodes);

        return "hcode";
    }
}