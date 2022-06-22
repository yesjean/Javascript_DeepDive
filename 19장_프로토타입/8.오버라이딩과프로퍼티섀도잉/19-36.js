


const Person = (function () {
    // 생성자 함수
    function Person(name) {
      this.name = name;
    }
  
    // 프로토타입 메서드
    Person.prototype.sayHello = function () {
      console.log(`Hi! My name is ${this.name}`);
    };
  
    // 생성자 함수를 반환
    return Person;
  }());
  
  const me = new Person('Lee');
  
  // 인스턴스 메서드 -> 프로토타입 메서드 sayHello()를 오버라이딩함. 프로퍼티 메서드 sayHello()는 가려짐.
  me.sayHello = function () {
    console.log(`Hey! My name is ${this.name}`);
  };
  
  // 인스턴스 메서드가 호출된다. 프로토타입 메서드는 인스턴스 메서드에 의해 가려진다. -> 상속관계에 의해 가려짐 == 프로퍼티 섀도잉 
  me.sayHello(); // Hey! My name is Lee

  