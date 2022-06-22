//파괴된 constructor 프로퍼티와 생성자 함수 간의 연결 되살리기
// ==> 프로토타입으로 교체한 객체 리터럴에 constructor 프로퍼티를 추가하여 프로토타입의 constructor 프로퍼티를 되살린다.


const Person = (function () {
    function Person(name) {
      this.name = name;
    }
  
    // 생성자 함수의 prototype 프로퍼티를 통해 프로토타입을 교체
    Person.prototype = {
      // constructor 프로퍼티와 생성자 함수 간의 연결을 설정
      constructor: Person,
      sayHello() {
        console.log(`Hi! My name is ${this.name}`);
      }
    };
  
    return Person;
  }());
  
  const me = new Person('Lee');
  
  // constructor 프로퍼티가 생성자 함수를 가리킨다.
  console.log(me.constructor === Person); // true
  console.log(me.constructor === Object); // false