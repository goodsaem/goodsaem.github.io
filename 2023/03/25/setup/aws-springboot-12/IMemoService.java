package io.github.goodsaem.api.service;
import io.github.goodsaem.api.entity.Memo;
import java.util.List;
public interface IMemoService {
    List<Memo> readMemos();
    Memo readMemo(long id);
    Memo createMemo(String title,String contents);
    Memo updateMemo(long id,String title,String contents);
    void deleteMemo(long id);
    void deleteMemos();
}