//인스턴스 프로퍼티는 constructor 내부에서 정의해야한다.
//constructor 내부에서 this에 추가한 프로퍼티는 언제나 클래스가 생성한 인스턴스의 프로퍼티가 된다.
//인스턴스 프로퍼티는 언제나 public

class Person {
    constructor(name) {
      // 인스턴스 프로퍼티
      this.name = name; //name 프로퍼티는 public 하다
    }
  }
  
  const me = new Person('Lee');

  //name은 public 하다 
  console.log(me); // Person {name: "Lee"}
  console.log(me.name);  //Lee