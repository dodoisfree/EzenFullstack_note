/**
 * @filename    : BadRequestException.js
 * @author      : 천경재 (yocasd2@gmail.com)
 * @description : 에러객체, 멤버변수 가져오기
 */



class BadRequestException extends Error {
    constructor(msg = '잘못된 요청 입니다.', selector = null) {
        super(msg);
        this._statusCode = 400;
        this._selector = selector;
    }

    get statusCode() {
        return this._statusCode;
    }

    get selector() {
        return this._selector;
    }
}