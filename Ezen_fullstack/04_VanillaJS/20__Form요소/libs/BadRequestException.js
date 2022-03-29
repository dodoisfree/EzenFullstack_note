class BadRequestException extends Error {
    constructor(msg = '잘못된 요청 입니다.', selector = null) {
        super(msg);
        // 멤버변수 추가
        this._statusCode = 400;
        this._selector = selector;
    }

    get statusCode() {
        return this._statusCode;
    }

    get selector() {
        return this._selector;
    }

    set selector(params) {
        this._selector = params;
    }
}

// for node.js ==> module.exports = BadRequestException;
