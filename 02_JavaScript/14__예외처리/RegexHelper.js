const BadRequestException = require('./BadRequestException');

class RegexHelper {

    /** 입력값이 한글로만 구성되어 있는지를 검사하는 메서드*/
    kor(input, msg) {
        const pattern1 = /^[ㄱ-ㅎ가-힣]*$/;
        // input이 pattern1 정규식에 부합하지 않는다면?
        if (!pattern1.test(input)) {
            throw new BadRequestException(msg);
        }
    }

    /** 입력값이 숫자로만 구성되어 있는지를 검사하는 메서드*/
    num(input, msg) {
        const pattern1 = /^[0-9]*$/;
        // input이 pattern1 정규식에 부합하지 않는다면?
        if (!pattern1.test(input)) {
            throw new BadRequestException(msg);
        }
    }

    /** 입력값이 영문 + 숫자로만 구성되어 있는지를 검사하는 메서드*/
    engNum(input, msg) {
        const pattern1 = /^[a-zA-Z0-9]*$/;
        // input이 pattern1 정규식에 부합하지 않는다면?
        if (!pattern1.test(input)) {
            throw new BadRequestException(msg);
        }
    }

    /** 최대 글자 수 검사 */
    maxLen(input, len, msg) {
        if (input.length > len) {
            throw new BadRequestException(msg);
        }
    }

}

module.exports = RegexHelper;