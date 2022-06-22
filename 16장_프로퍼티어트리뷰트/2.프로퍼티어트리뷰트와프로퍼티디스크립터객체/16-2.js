//자바스크립트 엔진은 프로퍼티를 생성할 때 프로퍼티의 상태를 나타내는 프로퍼티 어트리뷰트를 기본값으로 자동 정의한다.
//프로퍼티의 상태 - 프로퍼티의 값, 값의 갱신 기능 여부, 열거가능 여부, 재정의 가능 여부


const person = {
    name: 'Lee'
  };
  
  //프로퍼티 어트리뷰트에 직접 접근 불가. getOwnPropertyDescriptor()로 간접적으로 확인 가능 
  // 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 반환한다.
  console.log(Object.getOwnPropertyDescriptor(person, 'name'));
  // {value: "Lee", writable: true, enumerable: true, configurable: true}
  

  //getOwnPropertyDescriptor() - 하나의 프로퍼티에 대해 디스크립터 객체를 반환
  //ES8에서 도입 : getOwnPropertyDescriptors() - 모든 프로퍼티의 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 객체들을 반환.

  //프로퍼티 동적 생성
  person.age = 20;

  //모든 프로퍼티의 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체들을 반환한다.
  console.log(Object.getOwnPropertyDescriptors(person));

  /*
  {
    name: {value: "Lee", writable: true, enumerable: true, configurable: true},
    age: {value: 20, writable: true, enumerable: true, configurable: true},
  }
  */