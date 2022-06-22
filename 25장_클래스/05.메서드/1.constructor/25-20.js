//this가 아닌 다른 객체를 명시적으로 반환하면 인스턴스가 반환되지 못하고 return문에 명시한 객체가 반환된다.

class Person {
    constructor(name) {
      this.name = name;
  
      // 명시적으로 객체를 반환하면 암묵적인 this 반환이 무시된다.
      return {};
    }
  }
  
  // constructor에서 명시적으로 반환한 빈 객체가 반환된다.
  const me = new Person('Lee');
  console.log(me); // {}