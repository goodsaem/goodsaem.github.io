package io.github.goodsaem.api.repo;

import io.github.goodsaem.api.entity.Memo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemoJpaRepo extends JpaRepository<Memo, Long> {
}
