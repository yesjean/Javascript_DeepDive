//sayHi 메서드를 프로토타입 메서드로 변경하여 sayHi 메서드의 중복 생성을 방지해보기

function Person(name, age) {
    this.name = name; // public
    let _age = age;   // private
  }
  
  // 프로토타입 메서드
  Person.prototype.sayHi = function () {
    // Person 생성자 함수의 지역 변수 _age를 참조할 수 없다
    console.log(`Hi! My name is ${this.name}. I am ${_age}.`);
  };

// Person 생성자 함수의 지역 변수 _age를 참조할 수 없는 문제 
// -> 즉시 실행 함수를 사용하여 Person 생성자와 Person.prototype.sayHi 메서드를 하나의 함수 내에 모아보기.
