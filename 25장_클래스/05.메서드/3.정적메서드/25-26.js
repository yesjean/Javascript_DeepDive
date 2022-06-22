
//클래스에서는 메서드에 static 키워드를 붙이면 정적 메서드가 된다. 

class Person {
    // 생성자
    constructor(name) {
      // 인스턴스 생성 및 초기화
      this.name = name;
    }
  
    // 정적 메서드
    static sayHi() {
      console.log('Hi!');
    }
  }


//정적메서드는 클래스로 호출한다.
//정적 메서드는 인스턴스 없이도 호출 가능
Person.sayHi(); //Hi!

//정적 메서드는 인스턴스로 호출 불가.
//인스턴스의 프로토타입 체인 상에는 클래스가 존재하지 않기 때문에 인스턴스로 클래스의 메서드를 상속 받을 수 X
const me = new Person('Lee');
me.sayHi(); //TypeError: me.sayHi is not a function