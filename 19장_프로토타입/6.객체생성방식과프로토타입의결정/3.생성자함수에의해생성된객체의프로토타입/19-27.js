//생성자 함수에 의해 생성되는 객체의 프로토타입은 생성자 함수의 prototype 프로퍼티에 바인딩되어있는 객체이다.


function Person(name) {
    this.name = name;
  }
  
  const me = new Person('Lee');