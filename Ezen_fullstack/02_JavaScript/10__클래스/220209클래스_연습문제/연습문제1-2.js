class Rectangle {
    constructor() {
        this.width = null;
        this.height = null;
    }

    get width() {
        return this._width;
    }

    set width(param) {
        this._width = param;
    }

    get height() {
        return this._height;
    }

    set height(param) {
        this._height = param;
    }

    getAround() {
        return this.width * 2 + this.height * 2;
    }

    getArea() {
        return this.width * this.height;
    }
};

const rect = new Rectangle();
rect.width = 10;
rect.height = 5;

console.log('둘레의 길이는 %d이고 넓이는 %d입니다.', rect.getAround(), rect.getArea());