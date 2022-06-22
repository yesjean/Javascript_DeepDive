const Person = (function () {
    let _age = 0; // private
  
    // 생성자 함수
    function Person(name, age) {
      this.name = name; // public
      _age = age;
    }
  
    // 프로토타입 메서드
    Person.prototype.sayHi = function () {
      console.log(`Hi! My name is ${this.name}. I am ${_age}.`);
    };
  
    // 생성자 함수를 반환
    return Person;
  }());
  
  const me = new Person('Lee', 20);
  me.sayHi(); // Hi! My name is Lee. I am 20.
  console.log(me.name); // Lee
  console.log(me._age); // undefined
  
  const you = new Person('Kim', 30);
  you.sayHi(); // Hi! My name is Kim. I am 30.
  console.log(you.name); // Kim
  console.log(you._age); // undefined

//Person 생성자 함수가 여러 개의 인스턴스를 생성할 경우 _age변수의 상태가 유지되지 않음
//Person.prototype.sayHi 메서드가 단 한 번 생성되는 클로저이기 때문에 발생. 