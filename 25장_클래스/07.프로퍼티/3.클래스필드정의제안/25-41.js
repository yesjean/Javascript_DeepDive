// 클래스 몸체에서 클래스 필드를 정의하는 경우 this에 클래스 필드를 바인딩해서는 안된다.
// this는 클래스의 constructor와 메서드 내에서만 유효하다

class Person {
    //this에 클래스 필드를 바인딩해서는 안된다.
    // this.name = '';     //SyntaxError: Unexpected token '.'
}