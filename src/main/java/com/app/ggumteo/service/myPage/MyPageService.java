package com.app.ggumteo.service.myPage;

import com.app.ggumteo.domain.funding.*;
import com.app.ggumteo.domain.member.MemberVO;
import com.app.ggumteo.pagination.SettingTablePagination;
import com.app.ggumteo.pagination.WorkAndFundingPagination;

import java.util.Optional;

public interface MyPageService {
    //    회원 정보 조회
    public Optional<MemberVO> getMember(Long id);

    //    내 펀딩 게시물 전체 조회
    public MyFundingListDTO getMyFundingList(int page , WorkAndFundingPagination workAndFundingPagination, Long memberId);

    //    내 펀딩 게시물 전체 개수
    public int getMyFundingPostsTotal(Long memberId);

    //    펀딩 정보 조회
    public Optional<FundingDTO> getFunding(Long id);

    //    펀딩 구매자 목록 조회
    public MyFundingBuyerListDTO getMyFundingBuyerList(
           int page, SettingTablePagination settingTablePagination, Long fundingPostId);

    //    내 펀딩 게시물 하나의 구매자 전체 갯수
    public int getMyFundingPostBuyerTotal(Long fundingPostId);

    //    펀딩상품 발송여부 체크
    public void updateFundingSendStatus(BuyFundingProductVO buyFundingProductVO);

    //   내가 결제한 펀딩 목록 조회
    public MyBuyFundingListDTO getMyBuyFundingList(
            int page, WorkAndFundingPagination workAndFundingPagination, Long memberId);

    //  내가 결제한 펀딩 목록 전체 갯수
    public int getMyBuyFundingListTotal(Long memberId);
}
