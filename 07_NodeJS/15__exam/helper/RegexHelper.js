/**
 * @filename    : RegexHelper.js
 * @author      : 천경재 (yocasd2@gmail.com)
 * @description : 정규표현식 검사 수행
 */

import BadRequestException from "../exceptions/BadRequestException.js";

class RegexHelper {
    /**
     * 값의 존재 여부를 검사한다.
     * @param {string} content 검사할 대상에 대한 <input>요소의 DOM 객체
     * @param {string} msg        값이 없을 경우 표시할 메시지 내용
     */
    value(content, msg) {
        if (
            content === undefined ||
            content === null ||
            (typeof content === "string" && content.trim().length === 0)
        ) {
            throw new BadRequestException(msg);
        }

        return true;
    }

    /**
     * 입력값이 정규표현식을 충족하는지 검사한다.
     * @param {string} content   검사할 대상에 대한 <input>요소의 DOM 객체
     * @param {string} msg          표시할 메시지
     * @param {object} regexExpr    검사할 정규표현식
     */
    field(content, msg, regexExpr) {
        const src = typeof content == "string" ? content.trim() : content;
        // 입력값에 대한 정규표현식 검사가 실패라면?
        if (!src || !regexExpr.test(src)) {
            throw new BadRequestException(msg);
        }

        return true;
    }

    /**
     * 미입력 혹은 숫자로만 이루어졌는지 검사하기 위해 field()를 간접적으로 호출한다.
     * @param {string} content 검사할 대상에 대한 <input>요소의 DOM 객체
     * @param {string} msg        표시할 메시지
     */
    nullNum(content, msg) {
        if (
            content === undefined ||
            content === null ||
            (typeof content === "string" && content.trim().length === 0)
        ) {
            content = 1;
        } else {
            content = content;
        }
        return this.field(content, msg, /^[0-9]*$/);
    }

    /**
     * 숫자로만 이루어졌는지 검사하기 위해 field()를 간접적으로 호출한다.
     * @param {string} content 검사할 대상에 대한 <input>요소의 DOM 객체
     * @param {string} msg        표시할 메시지
     */
    num(content, msg) {
        return this.field(content, msg, /^[0-9]*$/);
    }

    /**
     * 날짜 형식(ex)2022-07-18 21:16:00)이 맞는지 검사한다.
     * @param {number} content 검사할 대상에 대한 <input>요소의 DOM 객체
     * @param {string} msg        표시할 메시지
     */
    date(content, msg) {
        return this.field(
            content,
            msg,
            /(^\d{4})-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01]) (0[0-9]|1[0-9]|2[0-4]):(0[0-9]|[1-5][0-9]):(0[0-9]|[1-5][0-9])$/
        );
    }

    /**
     * 입력값이 지정된 글자수를 초과했는지 검사한다.
     * @param {string} contnet 검사할 대상에 대한 <input>요소의 DOM 객체
     * @param {int} len        최대 글자수
     * @param {string} msg        값이 없을 경우 표시될 메시지
     */
    maxLength(content, len, msg) {
        if (!this.value(content) || content.length > len) {
            throw new BadRequestException(msg);
        }

        return true;
    }

    /**
     * 입력값이 지정된 글자수 미만인지 검사한다.
     * @param {string} contnet 검사할 대상에 대한 <input>요소의 DOM 객체
     * @param {int} len        최대 글자수
     * @param {string} msg        값이 없을 경우 표시될 메시지
     */
    minLength(content, len, msg) {
        if (!this.value(content) || content.length < len) {
            throw new BadRequestException(msg);
        }

        return true;
    }

    /**
     * 두 값이 동일한지 검사한다.
     * @param {string} origin 원본에 대한 CSS 선택자.
     * @param {string} compare     검사 대상에 대한 CSS 선택자
     * @param {string} msg         검사에 실패할 경우 표시할 메시지
     */
    compareTo(origin, compare, msg) {
        var src = origin.trim(); // 원본값을 가져온다.
        var dsc = compare.trim(); // 비교할 값을 가져온다.

        if (src !== dsc) {
            throw new BadRequestException(msg);
        }

        return true; // 성공했음을 리턴
    }

    /**
     * 영문으로만 이루어졌는지 검사하기 위해 field()를 간접적으로 호출한다.
     * @param {string} content 검사할 대상에 대한 <input>요소의 DOM 객체
     * @param {string} msg        표시할 메시지
     */
    eng(content, msg) {
        return this.field(content, msg, /^[a-zA-Z]*$/);
    }

    /**
     * 한글로만 이루어졌는지 검사하기 위해 field()를 간접적으로 호출한다.
     * @param {string} content 검사할 대상에 대한 <input>요소의 DOM 객체
     * @param {string} msg        표시할 메시지
     */
    kor(content, msg) {
        return this.field(content, msg, /^[ㄱ-ㅎ가-힣]*$/);
    }

    /**
     * 영문과 숫자로 이루어졌는지 검사하기 위해 field()를 간접적으로 호출한다.
     * @param {string} content 검사할 대상에 대한 <input>요소의 DOM 객체
     * @param {string} msg        표시할 메시지
     */
    engNum(content, msg) {
        return this.field(content, msg, /^[a-zA-Z0-9]*$/);
    }

    /**
     * 한글과 숫자로 이루어졌는지 검사하기 위해 field()를 간접적으로 호출한다.
     * @param {string} content 검사할 대상에 대한 <input>요소의 DOM 객체
     * @param {string} msg        표시할 메시지
     */
    korNum(content, msg) {
        return this.field(content, msg, /^[ㄱ-ㅎ가-힣0-9]*$/);
    }

    /**
     * 이메일주소 형식인지 검사하기 위해 field()를 간접적으로 호출한다.
     * @param {string} content 검사할 대상에 대한 <input>요소의 DOM 객체
     * @param {string} msg        표시할 메시지
     */
    email(content, msg) {
        return this.field(
            content,
            msg,
            /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
        );
    }

    /**
     * 핸드폰 형식인지 검사하기 위해 field()를 간접적으로 호출한다.
     * @param {string} content 검사할 대상에 대한 <input>요소의 DOM 객체
     * @param {string} msg        표시할 메시지
     */
    cellphone(content, msg) {
        return this.field(
            content,
            msg,
            /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/
        );
    }

    /**
     * 집전화 형식인지 검사하기 위해 field()를 간접적으로 호출한다.
     * @param {string} content 검사할 대상에 대한 <input>요소의 DOM 객체
     * @param {string} msg        표시할 메시지
     */
    telphone(content, msg) {
        return this.field(content, msg, /^\d{2,3}\d{3,4}\d{4}$/);
    }

    /**
     * 핸드폰번호 형식과 집전화 번호 형식인지 검사하기 위해 field()를 간접적으로 호출한다.
     * @param {string} content 검사할 대상에 대한 <input>요소의 DOM 객체
     * @param {string} msg        표시할 메시지
     */
    phone(content, msg) {
        var check1 = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/; // 핸드폰 형식
        var check2 = /^\d{2,3}\d{3,4}\d{4}$/; // 집전화 형식

        var src = content.trim(); // 입력값을 가져온다.

        // 핸드폰 형식도 아니고       집전화 형식도 아니라면?
        if (!src || (!check1.test(src) && !check2.test(src))) {
            throw new BadRequestException(msg);
        }
        return true;
    }

    /**
     * 라디오나 체크박스가 선택된 항목인지 확인한다.
     * @param {string} content 검사할 대상에 대한 <input>요소의 DOM 객체
     * @param {string} msg        검사에 실패할 경우 표시할 메시
     */
    // check(content, msg) {
    //     const checkedItem = Array.from(content).filter((v, i) => v.checked);

    //     if(checkedItem.length === 0){
    //         throw new BadRequestException(msg, content[0]);
    //     }
    // }

    /**
     * 라디오나 체크박스의 최소 선택 갯수를 제한한다.
     * @param {string} content 검사할 대상에 대한 <input>요소의 DOM 객체
     * @param {string} msg        검사에 실패할 경우 표시할 메시
     */
    // checkMin(content, len, msg) {
    //     const checkedItem = Array.from(content).filter((v, i) => v.checked);

    //     if(checkedItem.length < len){
    //         throw new BadRequestException(msg, content[0]);
    //     }
    // }

    /**
     * 라디오나 체크박스의 최대 선택 갯수를 제한한다.
     * @param {string} content 검사할 대상에 대한 <input>요소의 DOM 객체
     * @param {string} msg        검사에 실패할 경우 표시할 메시
     */
    // checkMax(content, len, msg) {
    //     const checkedItem = Array.from(content).filter((v, i) => v.checked);

    //     if(checkedItem.length > len){
    //         throw new BadRequestException(msg, content[0]);
    //     }
    // }
}

export default new RegexHelper();
