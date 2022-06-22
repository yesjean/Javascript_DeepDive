//getName 메서드는 다른 객체의 프로퍼티에 할당하는 것으로 다른 객체의 메서드가 될 수도 있고 
//일반 변수에 할당하여 일반 함수로 호출될 수도 있다.

const anotherPerson = {
    name: 'Kim'
  };
  // getName 메서드를 anotherPerson 객체의 메서드로 할당
  anotherPerson.getName = person.getName;
  
  // getName 메서드를 호출한 객체는 anotherPerson이다.
  console.log(anotherPerson.getName()); // Kim
  
  // getName 메서드를 변수에 할당
  const getName = person.getName;
  
  // getName 메서드를 일반 함수로 호출
  console.log(getName()); // ''
  // 일반 함수로 호출된 getName 함수 내부의 this.name은 브라우저 환경에서 window.name과 같다.
  // 브라우저 환경에서 window.name은 브라우저 창의 이름을 나타내는 빌트인 프로퍼티이며 기본값은 ''이다.
  // Node.js 환경에서 this.name은 undefined다.