// 1) 클래스 형태의 모듈 참조
var MyModule3 = require('./MyModule3');

// 리턴된 모듈은 클래스 형태이므로,
// 기능의 사용을 위해서는 인스턴스를 생성해야 한다.
var module_obj = new MyModule3 ();
module_obj.say();

// 2) 객체 형태의 모듈 참조
var MyModule4 = require('./MyModule4');

// 리턴된 모듈은 객체 형태이므로,
// 직접 모듈 내의 기능을 호출할 수 있다.
MyModule4.say();