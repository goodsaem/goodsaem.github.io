package io.github.goodsaem.api.service;

import io.github.goodsaem.api.entity.Memo;
import io.github.goodsaem.api.repo.MemoJpaRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class MemoService implements IMemoService {
    private final MemoJpaRepo memoJpaRepo;

    @Override
    public List<Memo> readMemos() {
        return memoJpaRepo.findAll();
    }

    @Override
    public Memo readMemo(long id) {
        return memoJpaRepo.findById(id).orElse(null);
    }

    @Override
    public Memo createMemo(String title, String contents) {
        Memo memo = Memo.builder()
                .title(title)
                .contents(contents)
                .build();

        return memoJpaRepo.save(memo);
    }

    @Override
    public Memo updateMemo(long id, String title, String contents) {

        Memo memo = Memo.builder()
                .id(id)
                .title(title)
                .contents(contents)
                .build();

        return memoJpaRepo.save(memo);
    }

    @Override
    public void deleteMemo(long id) {
        memoJpaRepo.deleteById(id);
    }

    @Override
    public void deleteMemos() {
        memoJpaRepo.deleteAll();
    }
}