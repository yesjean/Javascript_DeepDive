//중복된 매개변수 이름을 사용하면 에러발생


(function () {
    'use strict';
  
    //SyntaxError: Duplicate parameter name not allowed in this context
    function foo(x, x) {
      return x + x;
    }
    console.log(foo(1, 2));
  }());