//strict mode에서 일반 함수로서 호출하면 this에 undefined가 바인딩 된다. 


(function () {
    'use strict';
  
    function foo() {
      console.log(this); // undefined
    }
    foo();
  
    function Foo() {
      console.log(this); // Foo
    }
    new Foo();
  }());