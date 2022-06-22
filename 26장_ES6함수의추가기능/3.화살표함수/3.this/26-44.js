// 클래스 필드에 화살표 함수 할당 가능


// Bad
class Person {
    // 클래스 필드 정의 제안
    name = 'Lee';
    sayHi = () => console.log(`Hi ${this.name}`);
  }
  
  const person = new Person();
  person.sayHi(); // Hi Lee

// sayHi 클래스 필드에 할당한 화살표 함수의 상위 스코프는 ? 
// 클래스 외부이다.
// 하지만 외부의 this를 참조하지 않고 클래스가 생성할 인스턴스를 참조함.
// sayHi 내부에서 참조한 this는 constructor 내부의 this 바인딩과 같음.
// 하지만 클래스 필드에 할당한 화살표 함수는 인스턴스 메서드가 되므로 ES6 메서드를 사용하는 것이 좋음. 

// Good
class Personn {
    // 클래스 필드 정의
    name = 'Lee';
  
    sayHi() { console.log(`Hi ${this.name}`); }
  }
  const personn = new Personn();
  personn.sayHi(); // Hi Lee