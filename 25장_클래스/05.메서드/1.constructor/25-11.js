//클래스 몸체에 생성할 수 있는 메서드
//constructor(생성자),프로토타입 메서드, 정적메서드 


//constructor는 인스턴스를 생성하고 초기화하기 위한 특수한 메서드. 이름 변경 X
class Person {
    // 생성자
    constructor(name) {
      // 인스턴스 생성 및 초기화
      this.name = name;
    }
  }

//크롬의 개발자 도구에서 실행 -> 클래스 내부 보기 
console.log(typeof Person); //function
console.dir(Person);

//모든 함수 객체가 가지고있는 prototype 프로퍼티가 가리키는 프로퍼타입 객체의 constructor 프로퍼티는 클래스 자신을 가리키고 있음.
//이는 클래스가 인스턴스를 생성하는 생성자 함수라는 것을 의미한다. 