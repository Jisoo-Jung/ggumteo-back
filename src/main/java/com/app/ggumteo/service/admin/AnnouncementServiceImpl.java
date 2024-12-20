package com.app.ggumteo.service.admin;

import com.app.ggumteo.domain.admin.AnnouncementVO;
import com.app.ggumteo.pagination.AdminPagination;
import com.app.ggumteo.repository.admin.AnnouncementDAO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(rollbackFor = Exception.class)
public class AnnouncementServiceImpl implements AnnouncementService {
    private final AnnouncementDAO announcementDAO;

    // 공지사항 작성
    @Override
    public void write(AnnouncementVO announcementVO) {
        announcementDAO.save(announcementVO);
    }

    // 공지사항 전체 조회 (페이지네이션, 정렬, 검색)
    @Override
    public List<AnnouncementVO> getAllAnnouncements(AdminPagination pagination, String order, String search) {
        return announcementDAO.findAll(pagination, order, search);
    }

    // 총 공지사항 수 조회 (검색 포함)
    @Override
    public int getTotalAnnouncements(String search) {
        return announcementDAO.countTotal(search);
    }

    // 공지사항 수정
    @Override
    public void updateAnnouncement(AnnouncementVO announcementVO) {
        announcementDAO.update(announcementVO);
    }

    // 공지사항 삭제
    @Override
    public void deleteAnnouncements(List<Integer> ids) {
        announcementDAO.deleteByIds(ids);
    }
}
