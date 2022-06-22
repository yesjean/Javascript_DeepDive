//  객체 instanceof 생성자 함수
//우변의 생성자 함수의 prototype에 바인딩된 객체가 좌변의 객체의 프로토타입 체인 상에 존재하면 true로 평가되고,
//그렇지 않은 경우 flase로 평가됨. 


// 생성자 함수
function Person(name) {
    this.name = name;
  }
  
  const me = new Person('Lee');
  
  // Person.prototype이 me 객체의 프로토타입 체인 상에 존재하므로 true로 평가된다.
  console.log(me instanceof Person); // true
  
  // Object.prototype이 me 객체의 프로토타입 체인 상에 존재하므로 true로 평가된다.
  console.log(me instanceof Object); // true