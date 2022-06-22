//내부슬롯과 내부 메서드는 자바스크립트 엔진의 구현 알고리즘을 설명하기위해 EMCAScript 사양에서 사용하는 의사 프로퍼티와 의사 메서드임. 
//  [[]] 으로 감싼 이름들이 내부슬롯, 내부메서드라 한다.


const o = {};

// 내부 슬롯은 자바스크립트 엔진의 내부 로직이므로 직접 접근할 수 없다.
// o.[[Prototype]] // -> Uncaught SyntaxError: Unexpected token '['
// 단, 일부 내부 슬롯과 내부 메서드에 한하여 간접적으로 접근할 수 있는 수단을 제공하기는 한다.
o.__proto__ // -> Object.prototype
