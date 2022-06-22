//in 연산자
/*
in 연산자는 객체 내에 특정 프로퍼티가 존재하는지 여부를 확인한다.
사용방법
key : 프로퍼티 키를 나타내는 문자열
object : 객체로 평가되는 표현식

key in object 
*/


const person = {
    name: 'Lee',
    address: 'Seoul'
  };
  
  // person 객체에 name 프로퍼티가 존재한다.
  console.log('name' in person);    // true
  // person 객체에 address 프로퍼티가 존재한다.
  console.log('address' in person); // true
  // person 객체에 age 프로퍼티가 존재하지 않는다.
  console.log('age' in person);     // false


//in 연산자는 확인 대상 객체의 프로퍼티뿐만 아니라 확인 대상 객체가 상속받은 모든 프로퍼티타입의 프로퍼티를 확인하므로 주의가 필요

//person 객체에는 toString 이라는 프로퍼티가 없지만 다음 코드의 실행결과는 true이다.
console.log('toString' in person);

//in 연산자가 person 객체에 속한 프로토타입 체인 상에 존재하는 모든 프로토타입에서 toString프로퍼티를 검색했기 때문이다.
//toString은 Object.prototype의 메서드이다. 


//in 연산자 대신 ES6에서 도입된 Reflect.has 메서드 사용가능 
console.log(Reflect.has(person, 'name'));   //true
console.log(Reflect.has(person, 'toString'));   //true