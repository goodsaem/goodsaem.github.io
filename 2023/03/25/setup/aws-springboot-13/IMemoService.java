package io.github.goodsaem.api.service;
import io.github.goodsaem.api.entity.Memo;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
public interface IMemoService {
    List<Memo> readMemos();
    Page<Memo> searchMemo(String keyword, Pageable pageable);
    Memo readMemo(long id);
    Memo createMemo(String title,String contents);
    Memo updateMemo(long id,String title,String contents);
    void deleteMemo(long id);
}