// 화살표 함수는 함수 자체의 super 바인딩을 갖지 않음. 
// 따라서 this와 마찬가지로 함수 내부에서 super를 참조하면 상위 스코프의 super를 참조함. 


class Base {
    constructor(name) {
      this.name = name;
    }
  
    sayHi() {
      return `Hi! ${this.name}`;
    }
  }
  
  class Derived extends Base {
    // 화살표 함수의 super는 상위 스코프인 constructor의 super를 가리킨다.
    sayHi = () => `${super.sayHi()} how are you doing?`;
  }
  
  const derived = new Derived('Lee');
  console.log(derived.sayHi()); // Hi! Lee how are you doing?