/**
 * @filename    : RegexHelper.js
 * @author      : 천경재 (yocasd2@gmail.com)
 * @description : 정규표현식 검사 수행
 */


class RegexHelper {
    /**
     * 입력값이 정규표현식을 충족하는지 검사한다.
     * @param   {string} selector   검사할 대상의 CSS 선택자
     * @param   {string} msg        표시할 메세지
     * @param   {object} regexExpr  검사할 정규 표현식
     */

     checkup(selector, msg, regexExpr) {
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
     * 5~20자의 영문 소문자, 숫자와 특수기호(_),(-) 로만 이루어 졌는지 검사하기 위해 checkup()를 간접적으로 호출한다.
     * @param   {string} selector   검사할 대상의 CSS 선택자
     * @param   {string} msg        표시할 메시지
     */
    engnum(selector, msg) {
        return this.checkup(selector, msg, /^[a-z0-9_-]{5,20}/);
    }

    /**
     * 8~16자의 영문 대 소문자, 숫자, 특수문자를 검사하기 위해 checkup()를 간접적으로 호출한다.
     * @param   {string} selector   검사할 대상의 CSS 선택자
     * @param   {string} msg        표시할 메시지
     */

    engnum_pw(selector, msg) {
        return this.checkup(selector, msg, /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/);
    }

    /**
     *  검사하기 위해 checkup()를 간접적으로 호출한다.
     * @param   {string} selector   검사할 대상의 CSS 선택자
     * @param   {string} msg        표시할 메시지
     */

    kor(selector, msg) {
        return this.checkup(selector, msg, /^[가-힣a-zA-Z]+$/);
    }

    /**
     * 태어난 년도 중 1900 ~ 2099 까지 4자리가 맞는지 검사하기 위해 checkup()를 간접적으로 호출한다.
     * @param   {string} selector   검사할 대상의 CSS 선택자
     * @param   {string} msg        표시할 메시지
     */

    year_yy(selector, msg) {
        return this.checkup(selector, msg, /^(19|20)[0-9]{2}$/);
    }

    
}   