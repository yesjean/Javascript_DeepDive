//심벌타입 : 변경불가능한 원시타입의 값.
//이름이 충돌할 위험이 없는 객체의 유일한 프로퍼티 키를 만들기위해 사용한다.
//Symbol함수를 호출해서 생성함. 

// 심벌 값 생성
var key = Symbol('key');
console.log(typeof key); // symbol

// 객체 생성
var obj = {};

// 이름이 충돌할 위험이 없는 유일무이한 값인 심벌을 프로퍼티 키로 사용한다.
obj[key] = 'value';
console.log(obj[key]); // value