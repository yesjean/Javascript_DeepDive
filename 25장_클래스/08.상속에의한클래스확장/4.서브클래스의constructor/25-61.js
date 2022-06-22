// 클래스에서 constructor를 생략하면 클래스에 비어있는 constructor가 암묵적으로 정의된다.

// 수퍼클래스
class Base {}

// 서브클래스
class Derived extends Base {}


// 위 예제의 클래스에는 다음과 같이 암묵적으로 constructor가 정의됨
// 수퍼클래스
class Base {
    constructor() {}
  }
  
  // 서브클래스
  class Derived extends Base {
    constructor() { super(); }
  }
  
  const derived = new Derived();
  console.log(derived); // Derived {}

// 프로퍼티를 소유하는 인스턴스를 생성하려면 constructor 내부에서 인스턴스에 프로퍼티를 추가해야함
