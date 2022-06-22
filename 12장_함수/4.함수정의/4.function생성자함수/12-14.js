//함수 선언문이나 함수 표현식으로 생성한 함수와 function 생성자 함수로 생성한 함수는 동일하게 동작하지 않음

var add1 = (function () {
    var a = 10;
    return function (x, y) {
      return x + y + a;
    };
  }());
  
  console.log(add1(1, 2)); // 13
  
  var add2 = (function () {
    var a = 10;
    return new Function('x', 'y', 'return x + y + a;');
  }());
  
  console.log(add2(1, 2)); // ReferenceError: a is not defined