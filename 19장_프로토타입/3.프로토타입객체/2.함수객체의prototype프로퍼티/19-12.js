//prototype 프로퍼티는 생성자 함수가 생성할 객체의 프로토타입을 가리킨다.
//생성자 함수로서 호출할 수 없는 함수, non-constructor인 화살표 함수와 ES6 메서드 축약 표현으로 정의한 메서드는
//prototype 프로퍼티를 소유하지 않으며 프로토타입도 생성하지 않음. 


// 화살표 함수는 non-constructor다.
const Person = name => {
    this.name = name;
  };
  
  // non-constructor는 prototype 프로퍼티를 소유하지 않는다.
  console.log(Person.hasOwnProperty('prototype')); // false
  
  // non-constructor는 프로토타입을 생성하지 않는다.
  console.log(Person.prototype); // undefined
  
  // ES6의 메서드 축약 표현으로 정의한 메서드는 non-constructor다.
  const obj = {
    foo() {}
  };
  
  // non-constructor는 prototype 프로퍼티를 소유하지 않는다.
  console.log(obj.foo.hasOwnProperty('prototype')); // false
  
  // non-constructor는 프로토타입을 생성하지 않는다.
  console.log(obj.foo.prototype); // undefined