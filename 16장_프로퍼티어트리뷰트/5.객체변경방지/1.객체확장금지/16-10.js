//객체는 변경 가능한 값이므로 재할당 없이 직접 변경 가능.
//객체 변경 방지 메서드들은 객체의 변경을 금지하는 강도가 다르다. 

/*
    구분         메서드                  프로퍼티추가 / 프로퍼티삭제 / 프로퍼티값읽기 / 프로퍼티값쓰기 / 프로퍼티어트리뷰트재정의
객체 확장 금지  Object.preventExtentions    X           O           O           O           O
객체 밀봉      Object.seal                 X           X           O           O           X
객체 동결      Object.freeze               X           X           O           X           X
*/



//Object.preventExtentions : 프로퍼티의 추가를 금지 
//프로퍼티는 동적추가와 defineProperty 메서드로 추가가능. 이 두가지 방법 모두 금지 

//확장이 가능한 객체인지 여부는 Object.isExtensible 메서드로 확인 가능.


const person = { name: 'Lee' };

// person 객체는 확장이 금지된 객체가 아니다.
console.log(Object.isExtensible(person)); // true

// person 객체의 확장을 금지하여 프로퍼티 추가를 금지한다.
Object.preventExtensions(person);

// person 객체는 확장이 금지된 객체다.
console.log(Object.isExtensible(person)); // false

// 프로퍼티 추가가 금지된다.
person.age = 20; // 무시. strict mode에서는 에러
console.log(person); // {name: "Lee"}

// 프로퍼티 추가는 금지되지만 삭제는 가능하다.
delete person.name;
console.log(person); // {}

// 프로퍼티 정의에 의한 프로퍼티 추가도 금지된다.
Object.defineProperty(person, 'age', { value: 20 });
// TypeError: Cannot define property age, object is not extensible