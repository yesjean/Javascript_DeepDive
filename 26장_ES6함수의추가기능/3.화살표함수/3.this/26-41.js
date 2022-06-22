// 프로토타입 객체의 프로퍼티에 화살표 함수를 할당하는 경우도 동일한 문제 발생.

// Bad
function Person(name) {
    this.name = name;
  }
  
  Person.prototype.sayHi = () => console.log(`Hi ${this.name}`);
  
  const person = new Person('Lee');
  // 이 예제를 브라우저에서 실행하면 this.name은 빈 문자열을 갖는 window.name과 같다.
  person.sayHi(); // Hi


// 프로퍼티를 동적 추가 할때는 ES6 메서드 정의를 사용할 수 없으므로 일반 함수를 할당.

// Good
function Person2(name) {
    this.name = name;
  }
  
  Person2.prototype.sayHi = function () { console.log(`Hi ${this.name}`); };
  
  const person2 = new Person2('Lee');
  person2.sayHi(); // Hi Lee