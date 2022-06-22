//데이터 프로퍼티 : 키와 값으로 구성된 일반적인 프로퍼티
//접근자 프로퍼티 : 자체적으로는 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 호출되는 접근자
//              함수로 구성된 프로퍼티이다. 

//데이터 프로퍼티가 갖는 어트리뷰트
/*
프로퍼티 어트리뷰트 / 프로퍼티 디스크립터 객체의 프로퍼티 / 설명
[[value]] / value                 프로퍼티 키를 통해 프로퍼티 값에 접근하면 반환되는 값이다.
                                  프로퍼티 키를 통해 값을 변경하면 [[value]]에 값을 재할당한다.
                                  이때 프로퍼티가 없으면 프로퍼티를 동적 생성하고 생성된 프로퍼티의 [[value]]에 값을 저장한다.

[[Writable]] / writable           프로퍼티 값의 변경 가능 여부를 나타내며 불리언 값을 갖는다.
                                  [[Writable]]의 값이 false인 경우 해당 프로퍼티의 [[Value]]의 값을 변경할 수 없는 읽기전용 프로퍼티가 된다.

[[Enumerable]] / enumerable       프로퍼티 값의 변경 가능 여부를 나타내며 불리언 값을 갖는다.
                                  [[Enumerable]]의 값이 false인 경우 해당 프로퍼티는 for...in 문이나 Object.keys 메서드 등으로 열거할 수 없다.

[[Configurable]] / configurable   프로퍼티의 재정의 가능 여부를 나타내며 불리언 값을 갖는다.
                                  [[Configurable]]의 값이 false인 경우 해당 프로퍼티의 삭제, 프로퍼티 어트리뷰트의 값의 변경이
                                  금지된다. 단,[[Writable]]이 true인 경우 [[Value]]의 변경과 [[Writable]]을 false로 변경하는 것은 허용된다.
*/

const person = {
    name: 'Lee'
  };
  
  // 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 취득한다.
  console.log(Object.getOwnPropertyDescriptor(person, 'name'));
  // {value: "Lee", writable: true, enumerable: true, configurable: true}