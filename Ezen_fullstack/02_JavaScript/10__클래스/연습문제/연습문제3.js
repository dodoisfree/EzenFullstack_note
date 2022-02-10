class Student {
    // 생성자
    constructor(depn, clsnb) {
        this._depn = depn;    // 학과이름
        this._clsnb = clsnb;  // 학번이름
    }
    // 학번 getter
    get depn() {
        return this._depn;
    }
    // 학번 setter
    set depn(depn) {
        this._depn = depn;
    }
    // 학과 getter
    get clsnb() {
        return this._clsnb;
    }
    // 학과 setter
    set clsnb(clsnb) {
        this._clsnb = clsnb;
    }
    sayHello() {
        console.log("나는 %s학과 %d학번 입니다.", this.depn, this.clsnb);
    }

}
const stud = new Student("코딩", 22);
stud.sayHello();