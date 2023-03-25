package io.github.goodsaem.api.controller.v1;

import io.github.goodsaem.api.entity.Memo;
import io.github.goodsaem.api.service.IMemoService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/v1")
@Slf4j
public class MemoController {
    private final IMemoService iMemoService;

    @GetMapping(value = "/memo/search")
    public Page<Memo> searchMemo(@RequestParam String keyword, @PageableDefault(size=3,sort="id") Pageable pageable) {
        return iMemoService.searchMemo(keyword,pageable);
    }

    @GetMapping(value = "/memos")
    public List<Memo> readMemos() {
        return iMemoService.readMemos();
    }

    @GetMapping(value = "/memo/{id}")
    public Memo readMemo(@PathVariable long id) {
        return iMemoService.readMemo(id);
    }

    @PostMapping(value = "/memo")
    public Memo createMemo(@RequestBody Memo memo) {
        return iMemoService.createMemo(memo.getTitle(), memo.getContents());
    }

    @PutMapping(value = "/memo")
    public Memo updateMemo(@RequestBody Memo memo) {
        return iMemoService.updateMemo(memo.getId(), memo.getTitle(), memo.getContents());
    }

    @DeleteMapping(value = "/memo/{id}")
    public void deleteMemo(@PathVariable long id) {
        iMemoService.deleteMemo(id);
    }

    @DeleteMapping(value = "/memos/{ids}")
    public void deleteMemos(@PathVariable("ids") List<Long> ids) {
        for(Long id:ids) {
            iMemoService.deleteMemo(id);
        }
    }
}