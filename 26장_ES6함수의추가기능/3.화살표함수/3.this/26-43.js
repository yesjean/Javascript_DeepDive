// 일반 함수가 아닌 ES6 메서드를 동적 추가하고 싶다면
// 객체 리터럴을 바인딩하고 프로토타입의 constructor 프로퍼티와 생성자 함수간의 연결을 재설정한다.


function Person(name) {
    this.name = name;
  }
  
  Person.prototype = {
    // constructor 프로퍼티와 생성자 함수 간의 연결을 재설정
    constructor: Person,
    sayHi() { console.log(`Hi ${this.name}`); }
  };
  
  const person = new Person('Lee');
  person.sayHi(); // Hi Lee