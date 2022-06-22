//자바스크립트는 프로토타입 기반 객체지향언어로 클래스가 필요없다.
//ES5에서는 클래스 없이도 상속을 구현할 수 있다. 

// ES5 생성자 함수
var Person = (function () {
    // 생성자 함수
    function Person(name) {
      this.name = name;
    }
  
    // 프로토타입 메서드
    Person.prototype.sayHi = function () {
      console.log('Hi! My name is ' + this.name);
    };
  
    // 생성자 함수 반환
    return Person;
  }());
  
  // 인스턴스 생성
  var me = new Person('Lee');
  me.sayHi(); // Hi! My name is Lee

//클래스의 extends와 super 키워드는 상속 관계 구현을 더욱 간결하고 명료하게함.
//클래스를 프로토타입 기반 객체 생성 패넡의 단순한 문법적 설탕이라고 보기보다는 새로운 객체 생성 매커니즘으로 보는 것이 좀 더 합당하다. 

//클래스와 생성자 함수의 차이
/*
1. 클래스를 new 연산자 없이 호출하면 에러 발생
  생성자 함수는 new 연산자 없이 호출하면 일반 함수로서 호출됨.

2. 클래스는 extends, super 지원
   생성자 함수는 지원안함.

3. 클래스는 호이스팅이 발생하지 않는 것처럼 동작함
   생성자 함수는 호이스팅 발생 
   함수 선언문 -> 함수 호이스팅
   함수 표현식 -> 변수 호이스팅

4. 클래스는 암묵적으로 stric mode가 지정됨. 해제 불가
   생성자 함수는 암묵적으로 지정되지 않음.

5. 클래스의 constructor, 프로토타입메서드, 정적메서드는 모두 프로퍼티 어트리뷰트 [[Enumerable]]의 값이 false다.
   다시말해 열거되지 않음.
*/