//var 키워드로 선언한 변수의 중복 선언

//var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언이 허용된다. 이는 의도치 않게 변수 값이
//재할당되어 변경되는 부작용을 발생시킴

function foo() {
    var x = 1;
    // var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용한다.
    // 아래 변수 선언문은 자바스크립트 엔진에 의해 var 키워드가 없는 것처럼 동작한다.
    var x = 2;
    console.log(x); // 2
  }
  foo();

//하지만 let이나 const키워드로 선언된 변수는 같은 스코프 내에서 중복선언을 허용하지 않는다.

  function bar() {
    let x = 1;
    // let이나 const 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용하지 않는다.
    let x = 2; // SyntaxError: Identifier 'x' has already been declared
  }
  bar();