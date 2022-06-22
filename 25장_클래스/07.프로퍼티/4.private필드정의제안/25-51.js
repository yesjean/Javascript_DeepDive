// 접근자 프로퍼티를 통해 private 필드에 간접적으로 접근

class Person {
    // private 필드 정의 (반드시 클래스 몸체에 정의해야함)
    #name = '';
  
    constructor(name) {
      this.#name = name;
    }
  
    // name은 접근자 프로퍼티다.
    get name() {
      // private 필드를 참조하여 trim한 다음 반환한다.
      return this.#name.trim();
    }
  }
  
  const me = new Person(' Lee ');
  console.log(me.name); // Lee