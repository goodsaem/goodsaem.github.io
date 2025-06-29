package io.github.goodsaem.api.entity;

import lombok.*;
import javax.persistence.*;

@Builder
@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="memo")
public class Memo {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(nullable = false, length = 30)
    private String title;

    @Column(nullable = false, length = 4000)
    private String contents;
}