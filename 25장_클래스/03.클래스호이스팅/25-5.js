//클래스는 함수로 평가된다.
class Person {}
console.log(typeof Person); //function


//클래스는 정의 이전에 참조할 수 없다.
console.log(Person2);   //ReferenceError: Cannot access 'Person2' before initialization
//클래스 선언문
class Person2 {}


