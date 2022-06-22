//프로토타입 Person.prototype에 프로퍼티를 추가하여 하위 객체가 상속받을 수 있도록 구현.
//프로토타입은 객체이다. 따라서 일반 객체와 같이 프로토타입에 프로퍼티를 추가, 삭제 가능하고, 프로토타입 체인에 즉각 반영됨


function Person(name) {
    this.name = name;
  }
  
  // 프로토타입 메서드
  Person.prototype.sayHello = function () {
    console.log(`Hi! My name is ${this.name}`);
  };
  
  const me = new Person('Lee');
  const you = new Person('Kim');
  
  me.sayHello();  // Hi! My name is Lee
  you.sayHello(); // Hi! My name is Kim

  //Person 생성자 함수를 통해 생성된 모든 객체는 프로토타입에 추가된 sayHello메서드를 상속받아 사용가능