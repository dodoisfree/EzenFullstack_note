class Terran {
    // 모든 객체가 갖는 명사적 특성들을 멤버변수로 정의
    constructor(name, hp, dps) {
        this._name = name;      // 이름
        this._hp = hp;          // 체력
        this._dps = dps;        // 초당 공격력
        console.log("[%s] 체력: %d, 공격력: %d", name, hp, dps);
    }

    attack(target) {
        console.log(this._name + "(이)가 " + target + "(을)를 공격합니다. 데미지 :" + this._dps);
    }
}

class Marine extends Terran {
    // attack 메서드 override
    attack(target) {
        console.log(this._name + "(이)가 " + target + "에게 사격을 개시합니다. 데미지 :" + this._dps)
    }
}

class Tank extends Terran {
    attack(target) {
        super.attack(target);
        console.log(">>>>>> 탱크 포격");
    }
}

class Firebat extends Terran {
    constructor(name) {
        // 클래스 상속관계에서 부모의 생성자는 무조건 호출되어야 하므로,
        // 자식이 생성자를 갖는 경우 그 안에서 부모의 생성자를 강제 호출해야 한다.
        super(name, 500, 50);
    }
}

const m = new Marine("해병1", 120, 30);
// 자식 클래스에 의해 재정의된 기능 호출 --> 부모의 메서드는 가려진다.
m.attack("질럿");

const t = new Tank("탱크1", 120, 30);
t.attack("드라군");

const f = new Firebat("화염방사병");
f.attack("적");