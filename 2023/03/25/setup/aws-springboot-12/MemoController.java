package io.github.goodsaem.api.controller.v1;

import io.github.goodsaem.api.entity.Memo;
import io.github.goodsaem.api.service.IMemoService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/v1")
public class MemoController {
    private final IMemoService iMemoService;

    @GetMapping(value = "/memos")
    public List<Memo> readMemos() {
        return iMemoService.readMemos();
    }

    @GetMapping(value = "/memo/{id}")
    public Memo readMemo( @PathVariable long id) {
        return iMemoService.readMemo(id);
    }

    @PostMapping(value = "/memo")
    public Memo createMemo(@RequestParam String title,String contents) {
        return iMemoService.createMemo(title,contents);
    }

    @PutMapping(value = "/memo")
    public Memo updateMemo(@RequestParam long id, @RequestParam String title,String contents) {
        return iMemoService.updateMemo(id,title,contents);
    }

    @DeleteMapping(value="/memo/{id}")
    public void deleteMemo(@PathVariable long id) {
        iMemoService.deleteMemo(id);
    }

    @DeleteMapping(value="/memos")
    public void deleteMemos() {
        iMemoService.deleteMemos();
    }
}