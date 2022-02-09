function Rectangle() {
    this._width = null;
    this._height = null;
}

Rectangle.prototype = {
    get width() {
        return this._width;
    },
    set width(param) {
        this._width = param;
    },
    get height() {
        return this._height;
    },
    set height(param) {
        this._height = param;
    },
    getAround: function () {
        return this.width * 2 + this.height * 2;
    },
    getArea: function () {
        return this.width * this.height;
    },
};

const rect = new Rectangle();
rect.width = 10;
rect.height = 5;

console.log('둘레의 길이는 %d이고 넓이는 %d입니다.', rect.getAround(), rect.getArea());