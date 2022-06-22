//__proto__접근자 프로퍼티 대신 사용 
//Object.getPrototypeOf()  -> 프로토타입의 참조를 취득하고 싶은 경우  / ES5에서 도입 IE9이상부터 지원
//Object.setPrototypeOf()  -> 프로토타입을 교체하고 싶은 경우       / ES6에서 도입 IE11이상부터 지원

//Object.getPrototypeOf()  ===   get Object.prototype.__proto__
//Object.setPrototypeOf()  ===   set Object.prototype.__proto__


const obj = {};
const parent = { x: 1 };

// obj 객체의 프로토타입을 취득
Object.getPrototypeOf(obj); // obj.__proto__;
// obj 객체의 프로토타입을 교체
Object.setPrototypeOf(obj, parent); // obj.__proto__ = parent;

console.log(obj.x); // 1