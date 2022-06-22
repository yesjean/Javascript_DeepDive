//모든 객체가 가지고 있는 __proto__접근자 프로퍼티와 함수 객체만이 가지고 있는 prototype 프로퍼티는 결국 동일한 프로토타입을 가리킨다.
/*
        구분             /   소유     /       값       /   사용주체   /   사용목적
__proto__ 접근자 프로퍼티   모든객체        프로토타입의 참조   모든 객체       객체가 자신의 프로토타입에 접근 또는 교체하기 위해 사용
prototypr 프로퍼티        constructor   프로토타입의 참조   생성자 함수      생성자 함수가 자신이 생성할 객체의 프로토타입을 할당하기 위해 사용
*/

//생성자 함수로 객체를 생성한 후 __proto__접근자 프로퍼티와 prototype프로퍼티로 프로토타입 객체에 접근하기

// 생성자 함수
function Person(name) {
    this.name = name;
  }
  
  const me = new Person('Lee');
  
  // 결국 Person.prototype과 me.__proto__는 결국 동일한 프로토타입을 가리킨다.
  console.log(Person.prototype === me.__proto__);  // true