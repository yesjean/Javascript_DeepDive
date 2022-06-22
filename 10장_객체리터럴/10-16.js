
//프로퍼티값 갱신하기 
var person = {
    name: 'Lee'
  };
  
  // person 객체에 name 프로퍼티가 존재하므로 name 프로퍼티의 값이 갱신된다.
  person.name = 'Kim';
  
  console.log(person);  // {name: "Kim"}

  
  // 프로퍼티 동적 생성
person.age = 20;

// person 객체에 age 프로퍼티가 존재한다.
// 따라서 delete 연산자로 age 프로퍼티를 삭제할 수 있다.
delete person.age;

// person 객체에 address 프로퍼티가 존재하지 않는다.
// 따라서 delete 연산자로 address 프로퍼티를 삭제할 수 없다. 이때 에러가 발생하지 않는다.
delete person.address;

console.log(person); // {name: "Kim"}