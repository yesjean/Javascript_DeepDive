// 인스턴스를 생성할 때 외부의 초기값으로 클래스 필드를 초기화해야할 필요가 있다면 constructor에서 클래스 필드를 초기화해야한다.

class Person {
    name;
  
    constructor(name) {
      // 클래스 필드 초기화.
      this.name = name;
    }
  }
  
  const me = new Person('Lee');
  console.log(me); // Person {name: "Lee"}