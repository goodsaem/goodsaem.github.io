package io.github.goodsaem.api.entity;

import io.swagger.annotations.ApiModelProperty;
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
    @ApiModelProperty(value = "메모번호" , notes = "메모 고유 번호", example = "1")
    private long id;

    @Column(nullable = false, length = 30)
    @ApiModelProperty(required = true, value = "제목", notes = "메모 제목" , example = "중요한 메모")
    private String title;

    @Column(nullable = false, length = 4000)
    @ApiModelProperty(required = true, value="내용", notes = "메모 내용" , example = "내용을 등록해 봅니다.")
    private String contents;
}