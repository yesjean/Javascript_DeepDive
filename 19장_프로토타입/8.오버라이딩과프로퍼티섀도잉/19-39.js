//하위 객체를 통해 프로토타입의 프로퍼티를 변경 또는 삭제하는 것은 불가능하다.
//프로토타입에 직접 접근해야 변경, 삭제 가능


// 프로토타입 메서드 변경
Person.prototype.sayHello = function () {
    console.log(`Hey! My name is ${this.name}`);
  };
  me.sayHello(); // Hey! My name is Lee
  
  // 프로토타입 메서드 삭제
  delete Person.prototype.sayHello;
  me.sayHello(); // TypeError: me.sayHello is not a function