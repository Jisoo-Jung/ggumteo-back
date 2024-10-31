package com.app.ggumteo.mapper.member;

import com.app.ggumteo.domain.member.MemberVO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.Optional;

@Mapper
public interface MemberMapper {
//    회원가입
    public void insert(MemberVO memberVO);

//    카카오 회원 정보 조회
    public Optional<MemberVO> selectByMemberEmailForKakao(String memberEmail);

    // 로그인 시 프로필 이미지 업데이트
    public void updateProfileImgUrl(@Param("memberEmail") String memberEmail, @Param("profileImgUrl") String profileImgUrl);

//   회원 정보 조회: 마이페이지 목록 조회할 때 member id 조회가 필요하여 작성함.
    public Optional<MemberVO> selectById(Long id);



}
