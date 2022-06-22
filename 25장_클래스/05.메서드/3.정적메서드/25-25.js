//정적메서드는 인스턴스를 생성하지 않아도 호출할 수 있는 메서드이다.
//생성자 함수 - 정적메서드를 생성하기 위해 명시적으로 생성자 함수에 메서드를 추가 해야함 .

// 생성자 함수
function Person(name) {
    this.name = name;
  }
  
  // 정적 메서드
  Person.sayHi = function () {
    console.log('Hi!');
  };
  
  // 정적 메서드 호출
  Person.sayHi(); // Hi!