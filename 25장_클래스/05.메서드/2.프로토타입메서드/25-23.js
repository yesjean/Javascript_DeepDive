//클래스 몸체에서 정의한 메서드는 prototype 프로퍼티에 추가하지 않아도 프로토타입 메서드가 됨.


class Person {
    // 생성자
    constructor(name) {
      // 인스턴스 생성 및 초기화
      this.name = name;
    }
  
    // 프로토타입 메서드
    sayHi() {
      console.log(`Hi! My name is ${this.name}`);
    }
  }
  
  const me = new Person('Lee');
  me.sayHi(); // Hi! My name is Lee