//객체의 생성 방법
/*
1. 객체 리터럴
2. Object 생성자 함수
3. 생성자 함수
4. Object.create 메서드
5. 클래스(ES6)

공통점 : 추상연산 OrdinaryObjectCreate에 의해 생성됨
*/

const obj1 = {x:1};


//객체 리터럴에 생성된 obj 객체는 Object.prototype을 프로토타입으로 가지고 Object.prototype을 상속 받음.
//  => Object.prototype의 constructor프로퍼티와 hasOwnPrototype 메서드 사용가능 

const obj = { x: 1 };

// 객체 리터럴에 의해 생성된 obj 객체는 Object.prototype을 상속받는다.
console.log(obj.constructor === Object); // true
console.log(obj.hasOwnProperty('x'));    // true