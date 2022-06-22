//명시적으로 원시값을 반환하면 원시값 반환은 무시되고 암묵적으로 this가 반환된다.


class Person {
    constructor(name) {
      this.name = name;
  
      // 명시적으로 원시값을 반환하면 원시값 반환은 무시되고 암묵적으로 this가 반환된다.
      return 100;
    }
  }
  
  const me = new Person('Lee');
  console.log(me); // Person { name: "Lee" }


//constructor 내부에서 명시적으로 this가 아닌 다른 값을 반환하는 것은 클래스의 기본 동작을 훼손한다.
//따라서 constructor 내부에서 return문을 반드시 생략해야 한다. 