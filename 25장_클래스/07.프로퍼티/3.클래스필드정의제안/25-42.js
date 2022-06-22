// 클래스 필드를 참조하는 경우 this 반드시 사용!! 객체지향 언어는 생략가능..

class Person {
    // 클래스 필드
    name = 'Lee';
  
    constructor() {
      console.log(name); // ReferenceError: name is not defined
    }
  }
  
  new Person();