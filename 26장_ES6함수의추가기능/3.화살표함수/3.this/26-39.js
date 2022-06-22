// 메서드를 화살표 함수로 정의하는 것은 피해야함.(ES6메서드X 일반적의미의 메서드)


// Bad
const person = {
    name: 'Lee',
    sayHi: () => console.log(`Hi ${this.name}`)
  };
  
  // sayHi 프로퍼티에 할당된 화살표 함수 내부의 this는 상위 스코프인 전역의 this가 가리키는
  // 전역 객체를 가리키므로 이 예제를 브라우저에서 실행하면 this.name은 빈 문자열을 갖는
  // window.name과 같다. 전역 객체 window에는 빌트인 프로퍼티 name이 존재한다.
  person.sayHi(); // Hi



// 메서드를 정의할 때는 ES6 메서드 축약 표현으로 정의한 ES6 메서드를 사용.
// Good
const person2 = {
    name: 'Lee',
    sayHi() {
      console.log(`Hi ${this.name}`);
    }
  };
  
  person2.sayHi(); // Hi Lee