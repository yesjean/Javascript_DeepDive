//Object.create : 명시작으로 프로토타입을 지정하여 새로운 객체를 생성함.  객체를 생성하면서 직접적으로 상속을 구현함.
//      첫 번째 매개변수에 생성할 객체의 프로토타입으로 지정할 객테를 전달함.
//      두 번째 매개변수에 생성할 객체의 프로퍼티 키와 프로퍼티 디스크립터 객체로 이뤄진 객체를 전달함.
/*
지정된 프로토타입 및 프로퍼티를 갖는 새로운 객체를 생성하여 반환함.
@param {Object} prototype       - 생성할 객체의 프로토타입으로 지정할 객체
@param {Object} [proprtiesObject]   -생성할 객체의 프로퍼티를 갖는 객체
@param {Object} {Object}    - 지정된 프로토타입 및 프로퍼티를 갖는 새로운 객체

Object.create(prototype[, propertiesObject])
*/
/*
메서드의 장점
1. new 연산자 없이도 객체 생성 가능
2. 프로토타입을 지정하면서 객체를 생성할 수 있다.
3. 객체 리터럴에 의해 생성된 객체도 상속받을 수 있다.
*/

//Object.prototype의 빌트인 메서드인
// Object.prototype.hasOwnProperty, Object.prototype.isPrototypeOf, Object.prototype.propertyIsEnumerable 
// 등은 (모든 객체의 프로토타입 체인의 종점) Object.prototype의 메서드 이므로 모든 객체가 상속받아 호출할 수 있다.



// 프로토타입이 null인 객체를 생성한다. 생성된 객체는 프로토타입 체인의 종점에 위치한다.
// obj → null
let obj = Object.create(null);
console.log(Object.getPrototypeOf(obj) === null); // true
// Object.prototype을 상속받지 못한다.
console.log(obj.toString()); // TypeError: obj.toString is not a function

// obj → Object.prototype → null
// obj = {};와 동일하다.
obj = Object.create(Object.prototype);
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

// obj → Object.prototype → null
// obj = { x: 1 };와 동일하다.
obj = Object.create(Object.prototype, {
  x: { value: 1, writable: true, enumerable: true, configurable: true }
});
// 위 코드는 다음과 동일하다.
// obj = Object.create(Object.prototype);
// obj.x = 1;

console.log(obj.x); // 1
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

const myProto = { x: 10 };
// 임의의 객체를 직접 상속받는다.
// obj → myProto → Object.prototype → null
obj = Object.create(myProto);
console.log(obj.x); // 10
console.log(Object.getPrototypeOf(obj) === myProto); // true

// 생성자 함수
function Person(name) {
  this.name = name;
}

// obj → Person.prototype → Object.prototype → null
// obj = new Person('Lee')와 동일하다.
obj = Object.create(Person.prototype);
obj.name = 'Lee';
console.log(obj.name); // Lee
console.log(Object.getPrototypeOf(obj) === Person.prototype); // true