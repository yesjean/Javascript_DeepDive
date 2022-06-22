//constructor는 클래스 내에 최대 한 개만 존재할 수 있다.

class Person {
    constructor() {}
    constructor() {}
  }
  // SyntaxError: A class may only have one constructor
  //2개 이상의 constructor를 포함하면 문법에러 발생


//constructor는 생략할 수 있다.
class Person2 {} 


//constructor를 생략하면 클래스에 빈 constructor가 암묵적으로 정의된다.
class Person3 {
    constructor() {}
}
//빈 객체가 생성된다.
const me = new Person3();
console.log(me);    //Person {}