//선언하지 않은 변수를 참조하면 ReferenceError가 발생함

(function () {
    'use strict';
  
    x = 1;
    console.log(x); // ReferenceError: x is not defined
  }());