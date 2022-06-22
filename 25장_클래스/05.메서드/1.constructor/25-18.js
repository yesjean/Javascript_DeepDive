//프로퍼티가 추가되어 초기화된 인스턴스를 생성하려면 constructor 내부에서 this에 인스턴스 프로퍼티를 추가한다.


class Person {
    constructor() {
      // 고정값으로 인스턴스 초기화
      this.name = 'Lee';
      this.address = 'Seoul';
    }
  }
  
  // 인스턴스 프로퍼티가 추가된다.
  const me = new Person();
  console.log(me); // Person {name: "Lee", address: "Seoul"}