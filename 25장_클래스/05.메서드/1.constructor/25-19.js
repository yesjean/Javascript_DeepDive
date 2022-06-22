//인스턴스를 생성할 때 클래스 외부에서 인스턴스 프로퍼티의 초기값을 전달하려면 constructor에 매개변수를 선언하고 
//인스턴스를 생성할 때 초기값을 전달한다.

class Person {
    constructor(name, address) {
      // 인수로 인스턴스 초기화
      this.name = name;
      this.address = address;
    }
  }
  
  // 인수로 초기값을 전달한다. 초기값은 constructor에 전달된다.
  const me = new Person('Lee', 'Seoul');
  console.log(me); // Person {name: "Lee", address: "Seoul"}