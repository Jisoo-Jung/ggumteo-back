# 꿈터 |<a href="http://www.ggumteo.site/"> Spring Boot 프로젝트 : K-문화 컨텐츠 창작 지원 플랫폼(http://www.ggumteo.site/)</a>

## 🖥️ 프로젝트 소개

'**누구나 무엇이든 할 수 있다**'는 목표를 바탕으로, 작품(홍보 및 판매), 펀딩(후원), 모집(공고) 서비스를 통해 창작 과정에서 필요한 자본과 협업을 지원하며, 다양한 창작자들이 경계를 넘어 새로운 역할과 기회를 탐색할 수 있도록 하는 열린 플랫폼입니다.
<br><br>

## 💡기획배경 및 목적

![팀 프로젝트 발표자료(최종본)](https://github.com/user-attachments/assets/2661f5dc-5b09-431b-ace8-f725fbb7ccb3)

지난 20년간 한국 콘텐츠 산업은 지속적으로 성장하였지만, 많은 창작자들은 여전히 **자본 확보와 공정한 수익 분배**라는 근본적인 어려움에 직면해 있습니다. 저희는 창작자들이 이러한 문제를 극복하고 경제적 자립과 창작의 지속 가능성을 확보할 수 있는 플랫폼을 기획하였습니다. **작품(홍보 및 판매), 펀딩(후원), 모집(공고)** 서비스를 통해 창작자들에게 **자본 확보와 협업의 기회**를 제공하므로, 창작자들이 자신의 가치를 인정받고, 창작활동을 지속할 수 있는 기반을 마련하고자 하였습니다.

기존 플랫폼들은 창작자의 역할을 제한하거나 서비스 범위를 고정하는 것과 달리, 저희는 창작자들이 경계를 넘어 **새로운 역할과 기회**를 탐색하고 도전할 수 있는 환경을 제공하고자 하였습니다. 창작자의 **경제적 어려움을 해결함과 동시에, 다양한 창작 활동과 협업이 가능한 열린 생태계**를 만들고자 하였습니다.
<br><br>

## 💡기능요약

-   펀딩 지원 : 창작자들이 자신의 프로젝트를 등록하고 후원금을 모집할 수 있도록 지원한다.
-   작품 홍보 및 판매 : 자신의 작품을 선보이고 판매할 수 있는 공간을 제공한다.
-   협업 매칭 : 창작자들이 협업할 파트너를 쉽게 찾을 수 있도록 연결한다.
-   사용자 친화적 인터페이스 : 직관적인 작품 등록, 펀딩, 후원, 협업자 모집 프로세스를 제공하여 누구나 쉽게 이용할 수 있다.
    <br><br>

## ⚙️ 개발 환경

-   java
-   jQuery
-   Thymeleaf
-   Spring Boot
-   HTML, CSS, JS
-   MySQL
-   JDK 17.0.10
-   YAML
-   JSON
-   REST:API
-   Sourcetree
-   DBeaver
-   IntelliJ IDEA
-   git, gitHub
-   JUnit5
-   POSTMAN
-   Lombok
-   Boot pay
-   Kakao OAuth
-   Cool SMS api
-   Java Mail api
-   Google SMTP
    <br><br>

## 📌 담당 업무

-   공용서버(DB) 담당

### #프로트엔드

1.  공용 상단 영역(Header)
2.  공용 하단 영역(footer) <br>
3.  홈 메인 페이지 <br>
4.  관리자 페이지 <br>
    -   회원 관리 목록
    -   공지 관리 목록
    -   작품 관리 목록
    -   펀딩 관리 목록
    -   모집 관리 목록
    -   문의 관리 목록
    -   결제 관리 목록

### #백엔드

<마이페이지> \* _마이페이지 전체가 페이지 이동 없이 한 HTML 안에 구성되어 있음._

1.  나의 활동영역: 내 작품
    -   최신 내 작품 게시글 목록 2개 단위로 조회하여 페이징 처리(Rest)
    -   구매한 사람들 버튼 선택 시, 최신 구매자 목록 4개 단위로 조회하여 페이징 처리(Rest)
    -   발송여부 수정: 보냄/안보냄 버튼 선택 시 발송여부 상태 변경(Rest)
    -   제목 선택 시, 상세 페이지로 이동
    -   수정 버튼 선택 시, 수정 페이지로 이동
    <br><br>
2.  나의 활동영역: 내가 구매한 작품 
    -   최신 내가 구매한 작품 게시글 목록 2개 단위로 조회하여 페이징 처리(Rest)
    -   구매내역 삭제 버튼 선택 시, 마이페이지 내에서 해당 목록 삭제 처리(Rest)
    -   제목 선택 시, 상세 페이지로 이동
    <br><br>
3.  나의 활동영역: 나의 펀딩
    -   최신 나의 펀딩 게시글 목록 2개 단위로 조회하여 페이징 처리(Rest)
    -   구매한 사람들 버튼 선택 시, 최신 구매자 목록 4개 단위로 조회하여 페이징 처리(Rest)
    -   발송여부 수정: 보냄/안보냄 버튼 선택 시 발송여부 상태 변경(Rest)
    -   제목 선택 시, 상세 페이지로 이동
    -   수정 버튼 선택 시, 수정 페이지로 이동
    <br><br>
4.  나의 활동영역: 내가 결제한 펀딩
    -   최신 내가 결제한 펀딩 게시글 목록 2개 단위로 조회하여 페이징 처리(Rest)
    -   결제내역 삭제 버튼 선택 시, 마이페이지 내에서 해당 목록 삭제 처리(Rest)
    -   제목 선택 시, 상세 페이지로 이동
    <br><br>
5.  나의 활동영역: 나의 모집
    -   최신 나의 모집 게시글 목록 3개 단위로 조회하여 페이징 처리(Rest)
    -   지원한 사람들 버튼 선택 시, 최신 구매자 목록 4개 단위로 조회하여 페이징 처리(Rest)
    -   확인여부 수정: 확인/미확인 버튼 선택 시 확인여부 상태 변경(Rest)
    -   제목 선택 시, 상세 페이지로 이동
    -   수정 버튼 선택 시, 수정 페이지로 이동
    <br><br>
6.  나의 활동영역: 내가 지원한 모집
    -   최신 내가 지원한 모집 게시글 목록 3개 단위로 조회하여 페이징 처리(Rest)
    -   제목 선택 시, 상세 페이지로 이동
    <br><br>
7.  내 정보
    -   내 정보 수정 후 수정 버튼 선택 시 수정 처리(Rest)
    -   내 정보 수정 후 취소 버튼 선택 시 수정 취소
    <br><br>
8.  문의내역 
    -   최신 내가 작성한 문의글 목록 2개 단위로 조회하여 페이징 처리(Rest)
    -   관리자 답변 버튼 선택 시, 관리자 답변 조회 처리(Rest)
    <br><br>
9.  알림
    -   최신 알림 목록 5개 단위로 조회하여 더보기 페이징 처리(Rest)
    -   읽은 알림 업데이트: 알림 선택 시 읽음 상태로 변경 처리(Rest)
    -   알림 선택 시 해당 페이지 및 해당 화면으로 이동, 알림 목록에서 삭제
    -   새로고침 버튼 선택 시, 새로고침 기능 구현
    <br><br>
10. 회원 탈퇴 
    - 회원 탈퇴 버튼 선택 시 탈퇴 처리 및 메인페이지로 이동

<br><br>

## ✨ ERD

![ERD](https://github.com/user-attachments/assets/f588292d-62c7-466a-8d18-ae6a1e660a4a)

## 💥 트러블슈팅

**📌innerHTML = 방식으로 해결한 구매자 목록 페이지네이션**
<br>
<br>🌩문제 상황🌩<br>
구매자 정보를 받아와 REST API를 통해 구매자 목록을 출력하는 기능에서, '다음' 버튼을 클릭할 때 기존 목록이 사라지지 않고, 새 목록이 이전 목록 아래로 계속 추가되었다.
<br><br>
🚨문제 원인🚨<br>
JS 코드에서 innerHTML += 방식을 사용하여 데이터를 기존 HTML에 덧붙였기 때문에, 페이지네이션 시 새로 받은 데이터가 기존 데이터 아래에 계속 추가되었던 문제
<br><br>
🚀해결 방법🚀<br>
innerHTML = 방식을 사용하여, 기존 HTML을 완전히 초기화한 후, 새 데이터를 덮어쓰는 방식으로 수정했다. 이렇게 하면 페이지네이션을 할 때마다 테이블의 내용이 새로 갱신되며, 기존 데이터가 남지 않고 새 데이터만 표시되었다.

<br><br>
**📌마이페이지의 알림 카테고리 화면으로 이동?!**
<br>
<br>🌩문제 상황🌩<br>
알림 모달창에서 '영상' 또는 '글' 선택 시 마이페이지의 알림 카테고리 화면으로 이동하는 로직 구현 문제 밠
<br><br>
🚨문제 원인🚨<br>
구현 방법 자체를 모르겠어서 강사님께 여쭤보았다.
<br><br>
🚀해결 방법🚀<br>
강사님 피드백: 쿼리스트링을 사용하여 데이터를 전달하고, 자바스크립트에서 전달된 데이터를 활용하라.<br>
브라우저에서 알림 선택 시 알림 컨트롤러로 요청 보내게 하였고, <br>
알림 컨트롤러에서는 '마이페이지?category=alarm'으로 Redirect하도록 하였다. <br>해당 요청을 받으면 type값으로 알림 화면을 실행하도록 하였다. <br>
▷상세 해결 과정◁ <br>
쿼리스트링에서 사용하는 key와 value값을 category와 alarm이라고 정하였고, <br>알림 컨트롤러에 해당 쿼리스트링과 함께 Redirect문을 작성하였다. <br>
마이페이지 컨트롤러에서 응답하는 forward문을 작성하였고, model객체에 type 매개변수를 주입하였다. <br>자바스크립트에서는 type 값이 alarm 일 때 알림 화면 실행 코드를 작성하여 알림 화면을 표시하였다. <br>
<br><br>
**첫 번째 트러블 슈팅**과 비슷한 상황(자바스크립트 문제)은 여러번 발생했었다. 그리고 여러번 오류의 원인과 문제를 해결해가면서 처음부터 어떻게 데이터를 받고 어떻게 뿌릴 것인지 정확히 알고, 쪼개고, 하나씩 해야 한다는 것을 깨달았고, 꼼꼼하게 출력을 통해 확인하면서 작업을 진행해야 함을 절실히 깨달았다. 
**두 번째 트러블 슈팅**을 통해서는 Redirect(브라우저가 새로운 요청 수행), Forward(같은 요청 안에서 화면 전환), 쿼리스트링(URL 뒤에 key=value로 데이터 전달)의 개념을 명확히 이해했다. 향후 비슷한 문제가 생기면 더욱 신속히 해결할 수 있을 것이라고 확신하며, 이를 계기로 웹 개발에서 데이터 전달 방식에 대한 이해를 더욱 심화할 계획이다. 


<br><br>

## ✨ 프로젝트 통해 느낀점

1차 프로젝트 때는 내가 잘 못한다는 생각에 chatGPT에게 많이 의지했었다. 정확하게 어떻게 풀어가야 하는지 잘 모르는 상태에서 AI에게 물어보며 작업을 했었는데, 모르는 상태에서 하다 보니 오류가 생겼을 때 어떻게 풀어야할지 감이 안 왔고 수정시간이 너무 오래 걸렸다. 가장 중요한 것은, 전혀 성장하지 못하는 기분이었다. 그래서 2차 프로젝트 때는 조급하고 모르겠어도 chatGPT에게 물어보지 않기로 다짐했다. 대신, 강사님 수업자료와 구글링을 통해 공부하면서 진행했고, 도저히 풀리지 않는 것은 강사님께 피드백을 받으면서 작업하였다. 이 또한 시간이 오래 걸렸지만, 하나씩 개념이 잡히는 것 같았고 내가 어떤 부분이 부족하고 어려워하는지 정면으로 마주할 수 있었다.

초반에는 콘솔창을 통해 어떤 부분이 문제인지 집어주지 않는 오류가 생기면, 어떻게 해결해야 할지 막막했다. 나름대로 찾다가 도저히 안될 때, 강사님께 여쭤보면 출력은 해보았는지 물어보셨고, 꼼꼼히 출력하면서 찾다보면 오류를 발견하여 해결할 수 있었다.

또한, 초반에는 중간중간 출력해서 확인하지 않고, 강사님 코드를 참고하여 전체적으로 작성한 후 확인했었다. 그렇게 하다보면 구현이 빨리 되지만 한번 오류가 생기면, 어디서부터 점검 해야할지 막막했고, 해결하는데 시간이 오래 걸렸다. 그래서 이후부터는 test를 꼼꼼히 하는 습관을 만들었고, 조급함에 한꺼번에 하고 싶은 생각이 들어도 침착하게 하려고 애썼던 것 같다.

그래서 갈수록 출력을 정말 많이 했었다. 출력하면 90% 이상의 오류는 해결할 수 있었던 것 같다. 나머지는 방법 자체를 모르는 경우였고, 강사님의 수업자료 및 피드백과 구글링을 통해 해결할 수 있었다.

조급함을 내려놓고, 꼼꼼히 출력해야 한다는 것과 초반에 작업할 때 나중에 수정해야 할 경우를 생각하고 처음부터 하나씩 확인하며 작업해야 한다는 것을 여러 번의 실패를 통해 배울 수 있었다.

알림 기능 구현할 때 날짜별로 알림 목록을 감싸면서 ‘더보기’를 어떻게 구현해야 할지 어려워서 꽁꽁 묶어놨던 chatGPT를 사용했다. 초반은 잘 구현되었으나 오류가 생겼고, chatGPT가 알려준 코드를 정확히 파악하지 못한 상태에서 사용하여 거의 20번 이상의 수정이 일어났다. 그럼에도 제자리 걸음이었고, 처음부터 잘못되었음을 깊이 반성하게 되었다. 그리고 한꺼번에 구현하려고 했던 욕심을 내려놓고, 쪼개서 구현해보기로 하였고 강사님 수업자료를 공부하며 다시 작업하였다. 그랬더니 chatGPT에게 물어보면서 했을 때보다 거의 5분의 1의 시간이 걸렸다.

이번 프로젝트를 계기로 조급함을 정말 내려놔야겠다고 깨달았다. 그리고 한 5가지로 내가 습관을 들여야 할 부분을 깨달은 것 같다.

1. 어떤 로직으로 구현해야 할지 정리되었는가
2. 쪼개어서 작업하고 있는가
3. 내가 작성한 코드를 이해하고 작성했는가
4. 테스트 및 출력을 꼼꼼히 하였는가
5. 해당 개념을 정확히 알고 사용하고 있는가

특히, 개념을 잘 이해하지 못할 때가 많았고, 지금도 설명하지 못하는 개념들이 많다. 다른 개발자들의 방법을 보니 나만의 언어로 개념을 정리하면 머리에 남는다고 하였다. 나도 그러한 방법으로 개념 정리를 앞으로 해보아야겠다. (부가적으로 독서와 글쓰기를 시작해야겠다.)
