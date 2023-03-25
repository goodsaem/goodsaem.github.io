package io.github.goodsaem.api.repo;

import io.github.goodsaem.api.entity.Memo;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface MemoJpaRepo extends JpaRepository<Memo, Long> {
    Page<Memo> findAll(Pageable pageable);

    @Query(
        value = "SELECT m FROM Memo m WHERE m.title LIKE %:keyword% OR m.contents LIKE %:keyword% ORDER BY m.id DESC",
        countQuery = "SELECT COUNT(m.id) FROM Memo m WHERE m.title LIKE %:keyword% OR m.contents LIKE %:keyword%"
    )
    Page<Memo> findAllSearch(String keyword,Pageable pageable);
}