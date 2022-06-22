//즉시실행 함수 : 단 한번만 호출되며 다시 호출할수 없다.

// 익명 즉시 실행 함수 - 이름없는 익명함수가 일반적 
(function () {
    var a = 3;
    var b = 5;
    return a * b;
  }());


// 기명 즉시 실행 함수
(function foo() {
    var a = 3;
    var b = 5;
    return a * b;
  }());
  
  foo(); // ReferenceError: foo is not defined

//그룹 연산자 내의 기명함수는 함수 리터럴로 평가되며 함수 이름은 몸체에서만 참조할 수 있는 식별자이므로 즉시 실행 함수를 다시 호출할 수 X