// 클래스 필드를 초기화할 필요가 있다면 constructor 밖에서 클래스 필드를 정의할 필요가 없음.
// 어차피 constructor 내부에서 클래스 필드를 참조하여 초기값을 할당해야함. 
// 클래스가 생성한 인스턴스에 클래스 필드에 해당하는 프로퍼티가 없으면 자동으로 추가되가 때문.

class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  const me = new Person('Lee');
  console.log(me); // Person {name: "Lee"}
