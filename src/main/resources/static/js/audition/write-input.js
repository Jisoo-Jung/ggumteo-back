document.addEventListener("DOMContentLoaded", function () {
    const inputElements = document.querySelectorAll("input");

    inputElements.forEach((input) => {
        input.addEventListener("blur", function () {
            if (input.value.trim() === "") {
                input.classList.add("error");
            }
        });

        input.addEventListener("input", function () {
            if (input.classList.contains("error") && input.value.trim() !== "") {
                input.classList.remove("error");
            }
        });
    });

    // Textarea 유효성 검사 수정
    const textareas = document.querySelectorAll("textarea");

    textareas.forEach((textarea) => {
        textarea.addEventListener("focus", function () {
            const parentDiv = textarea.closest(".input-box"); // 상위 div 클래스명 확인
            if (parentDiv) {
                parentDiv.classList.add("active");
            }
        });

        textarea.addEventListener("blur", function () {
            const parentDiv = textarea.closest(".input-box"); // 상위 div 클래스명 확인
            if (parentDiv) {
                parentDiv.classList.remove("active");

                if (textarea.value.trim() === "") {
                    parentDiv.classList.add("error");
                }
            }
        });

        textarea.addEventListener("input", function () {
            const parentDiv = textarea.closest(".input-box"); // 상위 div 클래스명 확인
            if (parentDiv && parentDiv.classList.contains("error") && textarea.value.trim() !== "") {
                parentDiv.classList.remove("error");
            }
        });
    });



    // 날짜 입력 처리 함수
    function formatDateInput(input) {
        input.addEventListener("input", function () {
            let value = input.value.replace(/[^0-9]/g, ""); // 숫자만 남기고 나머지 제거
            let formattedValue = "";

            // 처음 4자리는 연도 처리 (YYYY)
            if (value.length <= 4) {
                formattedValue = value;
            }
            // 연도 이후 2자리는 월 처리 (MM)
            else if (value.length > 4 && value.length <= 6) {
                let year = value.slice(0, 4);
                let month = value.slice(4, 6);

                // 월은 문자열 그대로 받음, 숫자로 바꿔서 검증 (01~12)
                if (parseInt(month) >= 0 && parseInt(month) <= 12) {
                    formattedValue = year + "." + month;
                } else {
                    formattedValue = year; // 잘못된 월 입력 시 월 부분 제거
                }
            }
            // 그 이후 2자리는 일 처리 (DD)
            else if (value.length > 6 && value.length <= 8) {
                let year = value.slice(0, 4);
                let month = value.slice(4, 6);
                let day = value.slice(6, 8);

                // 월과 일의 범위 확인 후 포맷 설정
                if (parseInt(month) >= 0 && parseInt(month) <= 12) {
                    if (parseInt(day) >= 0 && parseInt(day) <= 31) {
                        formattedValue = year + "." + month + "." + day;
                    } else {
                        formattedValue = year + "." + month; // 잘못된 일 입력 시 일 부분 제거
                    }
                } else {
                    formattedValue = year; // 잘못된 월 입력 시 월과 일 부분 제거
                }
            }

            input.value = formattedValue;
        });

        input.addEventListener("keydown", function (e) {
            // YYYY.MM.DD 형식에 맞춰서 10자 이상 입력되지 않도록 제한
            if (
                input.value.length >= 10 &&
                e.key !== "Backspace" &&
                e.key !== "Tab"
            ) {
                e.preventDefault();
            }
        });
    }

    // 모집인원 입력 처리 함수
    function formatParticipantInput(input) {
        input.addEventListener("input", function () {
            let value = input.value.replace(/[^0-9]/g, ""); // 숫자만 입력받도록 처리
            if (value) {
                if (value.length > 2) {
                    value = value.slice(0, 3); // 최대 2자리 숫자 제한
                }
                input.value = value + "명"; // 숫자 뒤에 "명" 추가
            }
        });

        input.addEventListener("keydown", function (e) {
            // "명"을 포함한 상태에서 백스페이스로 숫자만 지우기
            if (input.value.endsWith("명") && e.key === "Backspace") {
                input.value = input.value.slice(0, -1); // "명" 제거
            }
        });
    }

    // 추가할 입력 제한 함수
    function limitInputLength(input, maxLength) {
        input.addEventListener("input", function () {
            if (input.value.length > maxLength) {
                input.value = input.value.slice(0, maxLength);
            }
        });

        input.addEventListener("blur", function () {
            if (input.value.length > maxLength) {
                input.value = input.value.slice(0, maxLength);
            }
        });
    }

    // 모집 제목 (postTitle) 입력 제한: 최대 50자
    const postTitleInput = document.querySelector('input[name="postTitle"]');

    if (postTitleInput) {
        limitInputLength(postTitleInput, 50);
    }

    // 모집 장소 (auditionLocation) 입력 제한: 최대 25자
    const auditionLocationInput = document.querySelector('input[name="auditionLocation"]');
    if (auditionLocationInput) {
        limitInputLength(auditionLocationInput, 25);
    }

    // 모집 배경 (auditionBackground) 입력 제한: 최대 50자
    const auditionBackgroundInput = document.querySelector('input[name="auditionBackground"]');
    if (auditionBackgroundInput) {
        limitInputLength(auditionBackgroundInput, 50);
    }

    // 모집 유형 (auditionCategory) 입력 제한: 최대 50자
    const auditionCategoryInput = document.querySelector('input[name="auditionCategory"]');
    if (auditionCategoryInput) {
        limitInputLength(auditionCategoryInput, 50);
    }

    // **추가된 부분: 경력과 예상 금액 입력 제한 적용 (최대 15자)**
    // 경력 (auditionCareer) 입력 제한: 최대 15자
    const auditionCareerInput = document.querySelector('input[name="auditionCareer"]');
    if (auditionCareerInput) {
        limitInputLength(auditionCareerInput, 15);
    }

    // 예상 금액 (expectedAmount) 입력 제한: 최대 15자
    const expectedAmountInput = document.querySelector('input[name="expectedAmount"]');
    if (expectedAmountInput) {
        limitInputLength(expectedAmountInput, 15);
    }

    const fileContentInput = document.querySelector('input[name="fileContent"]');
    if (fileContentInput) {
        limitInputLength(fileContentInput, 30);
    }

    // 근무시작일, 모집마감일 입력 필드에 대한 처리
    const dateInputs = document.querySelectorAll('input[name="serviceStartDate"],input[name="auditionDeadLine"]');
    dateInputs.forEach(formatDateInput);

    // 모집인원 입력 필드에 대한 처리
    const participantInput = document.querySelector(
        'input[name="auditionPersonnel"]'
    );
    if (participantInput) {
        formatParticipantInput(participantInput);
    }

    // radio-div 어디를 눌러도 클릭되게 함
    const categoryBoxes = document.querySelectorAll(".project-category-box");

    categoryBoxes.forEach((box) => {
        // div 클릭 시 내부 라디오 버튼 체크
        box.addEventListener("click", () => {
            const radioInput = box.querySelector('input[type="radio"]');
            if (radioInput) {
                radioInput.checked = true;
            }
        });

        // 마우스 올렸을 때 배경색 변경
        box.addEventListener("mouseenter", () => {
            box.style.backgroundColor = "#f7fafc";
        });

        // 마우스 뗐을 때 배경색 원래대로 변경
        box.addEventListener("mouseleave", () => {
            // 원래 배경색으로 복원
            box.style.backgroundColor = "";
        });
    });
});
