//strict mode는 즉시 실행 함수로 감싼 스크립트 단위로 적용하는 것이 바람직함. 


(function () {
    // non-strict mode
    var lеt = 10; // 에러가 발생하지 않는다.
  
    function foo() {
      'use strict';
  
      let = 20; // SyntaxError: Unexpected strict mode reserved word
    }
    foo();
  }());