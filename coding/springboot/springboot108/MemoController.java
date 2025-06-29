package io.github.goodsaem.api.controller.v1;

import io.github.goodsaem.api.entity.Memo;
import io.github.goodsaem.api.repo.MemoJpaRepo;
import io.github.goodsaem.api.response.Response;
import io.github.goodsaem.api.service.ResponseService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@Api(tags = {"1. Memo"})
@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/v1")
public class MemoController {
    private final MemoJpaRepo memoJpaRepo;
    private final ResponseService responseService;

    @ApiOperation(value = "메모 전체 조회", notes = "모든 메모를 조회합니다.")
    @GetMapping(value = "/memos")
    public Response<Memo> readMemos() {
        return responseService.getResult("list",memoJpaRepo.findAll());
    }

    @ApiOperation(value = "메모 한건 조회", notes = "memo id 로 메모를 조회합니다.")
    @GetMapping(value = "/memo/{id}")
    public Response<Memo> readMemo(@ApiParam(value = "memo id", required = true) @PathVariable long id) {
        return responseService.getResult("",memoJpaRepo.findById(id).orElse(null));
    }

    @ApiOperation(value = "메모 등록", notes = "메모를 등록합니다.")
    @PostMapping(value = "/memo")
    public Response<Memo> createMemo(@ApiParam(value = "제목", required = true) @RequestParam String title,
                                     @ApiParam(value = "내용", required = true) @RequestParam String contents
    ) {
        if(title.length() > 200) {
            return (Response<Memo>) responseService.getFailResult("제목 길이가 200보다 큽니다.");
        }

        if(contents.length() > 4000) {
            return (Response<Memo>) responseService.getFailResult("제목 길이가 4000보다 큽니다.");
        }

        Memo memo = Memo.builder()
                .title(title)
                .contents(contents)
                .build();

        return responseService.getResult("",memoJpaRepo.save(memo));
    }

    @ApiOperation(value = "메모 수정", notes = "메모를 수정합니다.")
    @PutMapping(value = "/memo")
    public Response<Memo> updateMemo(@ApiParam(value = "메모번호", required = true) @RequestParam long id,
                                     @ApiParam(value = "제목", required = true) @RequestParam String title,
                                     @ApiParam(value = "내용", required = true) @RequestParam String contents
                                      ) {
        Memo memo = Memo.builder()
                .id(id)
                .title(title)
                .contents(contents)
                .build();
        return responseService.getResult("",memoJpaRepo.save(memo));
    }

    @ApiOperation(value = "메모 삭제", notes = "메모 번호로 메모를 삭제합니다.")
    @DeleteMapping(value = "/memo")
    public Response deleteMemo(@ApiParam(value = "메모번호", required = true) @RequestParam long id
    ) {
        memoJpaRepo.deleteById(id);
        return responseService.getSuccessResult();
    }

    @ApiOperation(value = "메모 젠체 삭제", notes = "메모 전체를 삭제합니다.")
    @DeleteMapping(value = "/memos")
    public Response deleteMemos() {
        memoJpaRepo.deleteAll();
        return responseService.getSuccessResult();
    }
}