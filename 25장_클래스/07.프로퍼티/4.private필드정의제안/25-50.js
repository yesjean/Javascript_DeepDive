// 자바스크립트는 캡슐화를 완전히 지원하지 않음. 
// TC39 프로세스의 stage 3에는 private 필드를 정의할 수 있는 새로운 표준 사양이 제안되어 있다. 

//private 선두에는 #을 붙여준다. 
//private 필드를 참조할 때도 #을 붙여줘야함


class Person {
    // private 필드 정의
    #name = '';
  
    constructor(name) {
      // private 필드 참조
      this.#name = name;
    }
  }
  
  const me = new Person('Lee');
  
  // private 필드 #name은 클래스 외부에서 참조할 수 없다.
//   console.log(me.#name);
  // SyntaxError: Private field '#name' must be declared in an enclosing class