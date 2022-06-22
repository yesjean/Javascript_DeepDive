//__proto__접근자 프로퍼티를 코드 내에서 직접 사용하는 것은 권장하지 않는다.
//모든 객체가 __proto__접근자 프로퍼티를 사용할 수 있는것은 아니기 때문.
//직접 상속을 통해 Object.prototype을 상속받지 않는 객체를 생성할 수도 있기 때문에 사용할 수 없는 경우가 있다.


// obj는 프로토타입 체인의 종점이다. 따라서 Object.__proto__를 상속받을 수 없다.
const obj = Object.create(null);

// obj는 Object.__proto__를 상속받을 수 없다.
console.log(obj.__proto__); // undefined

// 따라서 Object.getPrototypeOf 메서드를 사용하는 편이 좋다.
console.log(Object.getPrototypeOf(obj)); // null