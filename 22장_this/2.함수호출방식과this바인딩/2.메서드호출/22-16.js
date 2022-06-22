//프로토타입 메서드 내부에서 사용된 this도 일반 메서드와 마찬가지로 해당 메서드를 호출한 객체에 바인딩된다. 

function Person(name) {
    this.name = name;
  }
  
  Person.prototype.getName = function () {
    return this.name;
  };
  
  const me = new Person('Lee');
  
  // getName 메서드를 호출한 객체는 me다.
  console.log(me.getName()); // ① Lee
  
  Person.prototype.name = 'Kim';
  
  // getName 메서드를 호출한 객체는 Person.prototype이다.
  console.log(Person.prototype.getName()); // ② Kim