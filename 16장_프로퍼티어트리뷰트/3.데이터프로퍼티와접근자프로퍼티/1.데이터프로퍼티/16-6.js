//접근자 프로퍼티 : 자체적으로는 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 호출되는 접근자
//              함수로 구성된 프로퍼티이다. 

//접근자 프로퍼티가 갖는 어트리뷰트
/*
프로퍼티 어트리뷰트 / 프로퍼티 디스크립터 객체의 프로퍼티 / 설명
[[Get]] get     접근자 프로퍼티를 통해 데이터 프로퍼티의 값을 읽을 때 호출되는 접근자 함수이다. 
                    즉 접근자 프로퍼티 키로 프로퍼티 값에 접근하면 프로퍼티 어트리뷰트 [[Get]]의 값, 즉 getter 함수가 호출되고 그 결과가
                    프로퍼티 값으로 반환된다.

[[Set]] set     접근자 프로퍼티를 통해 데이터 프로퍼티의 값을 저장할 때 호출되는 접근자 함수이다. 즉 접근자 프로퍼티 키로 프로퍼티 값을 저장하면
                    프로퍼티 어트리뷰트 [[Set]]의 값, 즉 Setter 함수가 호출되고 그 결과가 프로퍼티 값으로 저장된다. 

[[Enumerable]]      enumerable  데이터 프로퍼티의 [[Enumerable]]과 같다.
[[Configurable]]    configurable    데이터 프로퍼티의 [[configurable]]과 같다. 
*/

//접근자 함수는 getter/setter 함수라고도 부름. 
//접근자 프로퍼티는 getter와 setter 함수를 모두 정의할 수도 있고, 하나만 정의할 수도 있다. 

const person = {
    // 데이터 프로퍼티
    firstName: 'Ungmo',
    lastName: 'Lee',
  
    // fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
    // getter 함수
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    // setter 함수
    set fullName(name) {
      // 배열 디스트럭처링 할당: "31.1 배열 디스트럭처링 할당" 참고
      [this.firstName, this.lastName] = name.split(' ');
    }
  };
  
  // 데이터 프로퍼티를 통한 프로퍼티 값의 참조.
  console.log(person.firstName + ' ' + person.lastName); // Ungmo Lee
  
  // 접근자 프로퍼티를 통한 프로퍼티 값의 저장
  // 접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출된다.
  person.fullName = 'Heegun Lee';
  console.log(person); // {firstName: "Heegun", lastName: "Lee"}
  
  // 접근자 프로퍼티를 통한 프로퍼티 값의 참조
  // 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출된다.
  console.log(person.fullName); // Heegun Lee
  
  // firstName은 데이터 프로퍼티다.
  // 데이터 프로퍼티는 [[Value]], [[Writable]], [[Enumerable]], [[Configurable]] 프로퍼티 어트리뷰트를 갖는다.
  let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
  console.log(descriptor);
  // {value: "Heegun", writable: true, enumerable: true, configurable: true}
  
  // fullName은 접근자 프로퍼티다.
  // 접근자 프로퍼티는 [[Get]], [[Set]], [[Enumerable]], [[Configurable]] 프로퍼티 어트리뷰트를 갖는다.
  descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
  console.log(descriptor);
  // {get: ƒ, set: ƒ, enumerable: true, configurable: true}