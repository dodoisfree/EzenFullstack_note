/**
 * @filename    : RegexHelper.js
 * @author      : 이광호 (leekh4232@gmail.com)
 * @description : 정규표현식 검사 수행
 */

// for node.js
// const BadRequestException = require('./BadRequestException');

class RegexHelper {
    // constructor() {}

    /**
     * 값의 존재 여부를 검사한다.
     * @param  {string} selector 검사할 대상의 CSS 선택자
     * @param  {string} msg      값이 없을 경우 표시할 메시지 내용
     */
    value(selector, msg) {
        const content = document.querySelector(selector).value;
        
        if (content == undefined || content == null || (typeof content == 'string' && content.trim().length == 0)) {
            throw new BadRequestException(msg, selector);
        }
        
        return true;
    }

    /**
     * 입력값이 지정된 글자수를 초과했는지 검사한다.
     * @param   {string} selector   검사할 대상의 CSS 선택자
     * @param   {int} len           최대 글자수
     * @param   {string} msg        값이 없을 경우 표시될 메세지
     */
    maxLength(selector, len, msg) {
        this.value(selector, msg);

        const content = document.querySelector(selector).value;

        if (content.trim().length > len) {
            throw new BadRequestException(msg, selector);
        }

        return true;
    }

    /**
     * 입력값이 지정된 글자수를 초과했는지 검사한다.
     * @param   {string} selector   검사할 대상의 CSS 선택자
     * @param   {int} len           최소 글자수
     * @param   {string} msg        값이 없을 경우 표시될 메세지
     */
    minLength(selector, len, msg) {
        this.value(selector, msg);

        let content = document.querySelector(selector).value;

        if (content.trim().length < len) {
            throw new BadRequestException(msg, selector);
        }

        return true;
    }

     /**
     * 두 값이 동일한지 검사한다.
     * @param   {string} origin   원본에 대한 CSS 선택자.
     * @param   {string} compare  검사할 대상의 CSS 선택자
     * @param   {string} msg      검사에 실패할 경우 표시할 메세지
     */
    compareTo(origin, compare, msg) {
        this.value(origin, msg);
        this.value(compare, msg);

        var src = document.querySelector(origin).value.trim(); // 원본값을 가져온다.
        var dsc = document.querySelector(compare).value.trim(); // 비교할 값을 가져온다.

        if (src != dsc) {
            throw new BadRequestException(msg, origin);
        }

        return true; // 성공했음을 리턴
    }

    /**
     * 라디오나 체크박스가 선택된 항목인지 확인한다.
     * @param {string} selector 검사할 대상의 CSS 선택자
     * @param {string} msg      검사에 실패할 경우 표시할 메시지
     */
     check(selector, msg) {
        const content = document.querySelectorAll(selector);
        const checkedItem = Array.from(content).filter((v, i) => v.checked);

        if (checkedItem.length == 0) {
            throw new BadRequestException(msg, selector);
        }
    }
    
    /**
     * 라디오나 체크박스의 최소 선택 갯수를 제한한다.
     * @param   {string} selector 검사할 대상의 CSS 선택자
     * @param   {string} msg      검사에 실패 할 경우 표시할 메세지
     */
    checkMin(selector, len, msg) {
        const content = document.querySelectorAll(selector);
        const checkedItem = Array.from(content).filter((v, i) => v.checked);

        if (checkedItem.length < len) {
            throw new BadRequestException(msg, selector);
        }
    }

    /**
     * 라디오나 체크박스의 최대 선택 갯수를 제한한다.
     * @param   {string} selector 검사할 대상의 CSS 선택자
     * @param   {string} msg      검사에 실패 할 경우 표시할 메세지
     */
     checkMax(selector, len, msg) {
        const content = document.querySelectorAll(selector);
        const checkedItem = Array.from(content).filter((v, i) => v.checked);

        if (checkedItem.length > len) {
            throw new BadRequestException(msg, selector);
        }
    }

    /**
     * 입력값이 정규표현식을 충족하는지 검사한다.
     * @param   {string} selector   검사할 대상의 CSS 선택자
     * @param   {string} msg        표시할 메세지
     * @param   {object} regexExpr  검사할 정규 표현식
     */
    field(selector, msg, regexExpr) {
        this.value(selector, msg);

        const content = document.querySelector(selector).value;
        const src = content.trim();

        // 입력값에 대한 정규표현식 검사가 실패라면?
        if (!regexExpr.test(src)) {
            throw new BadRequestException(msg, selector);
        }

        return true;
    }

    /**
     * 숫자로만 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출한다.
     * @param   {string} selector   검사할 대상의 CSS 선택자
     * @param   {string} msg        표시할 메시지
     */
    num(selector, msg) {
        return this.field(selector, msg, /^[0-9]*$/);
    }

    /**
     * 영문으로만 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출한다.
     * @param   {string} selector   검사할 대상의 CSS 선택자
     * @param   {string} msg        표시할 메시지
     */
     eng(selector, msg) {
        return this.field(selector, msg, /^[a-zA-Z]*$/);
    }

    /**
     * 한글로만 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출한다.
     * @param   {string} selector   검사할 대상의 CSS 선택자
     * @param   {string} msg        표시할 메시지
     */
     kor(selector, msg) {
        return this.field(selector, msg, /^[ㄱ-ㅎ가-힣]*$/);
    }

    /**
     * 영문과 숫자로만 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출한다.
     * @param   {string} selector   검사할 대상의 CSS 선택자
     * @param   {string} msg        표시할 메시지
     */
     engNum(selector, msg) {
        return this.field(selector, msg, /^[a-zA-Z0-9]*$/);
    }

    /**
     * 이메일주소 형식인지 검사하기 위해 field()를 간접적으로 호출한다.
     * @param   {string} selector   검사할 대상의 CSS 선택자
     * @param   {string} msg        표시할 메시지
     */
     email(selector, msg) {
        return this.field(selector, msg, /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[az]{2})?)$/i);
    }

    /**
     * 핸드폰 번호 형식인지 검사하기 위해 field()를 간접적으로 호출한다.
     * @param   {string} selector   검사할 대상의 CSS 선택자
     * @param   {string} msg        표시할 메시지
     */
     cellphone(selector, msg) {
        return this.field(selector, msg, /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/);
    }

    /**
     * 집전화 형식인지 검사하기 위해 field()를 간접적으로 호출한다.
     * @param   {string} selector   검사할 대상의 CSS 선택자
     * @param   {string} msg        표시할 메시지
     */
     telphone(selector, msg) {
        return this.field(selector, msg, /^\d{2,3}\d{3,4}\d{4}$/);
    }

    /**
     * 핸드폰번호 형식과 집전화 번호 형식 둘중 하나를 충족하는지 검사
     * @param   {string} selector   검사할 대상의 CSS 선택자
     * @param   {string} msg        표시할 메시지
     */
     phone(selector, msg) {
        this.value(selector, msg);

        const content = document.querySelector(selector).value.trim();
        var check1 = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;   // 핸드폰 형식
        var check2 = /^\d{2,3}\d{3,4}\d{4}$/;                   // 집전화 형식
        
        // 핸드폰 형식도 아니고       집전화 형식도 아니라면?
        if (!check1.test(content) && !check2.test(content)) {
            throw new BadRequestException(msg, selector);
        }
        return true; // 성공했을을 리턴
    }
}

// for node.js ==> module.exports = new RegexHelper();