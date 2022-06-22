//콜백 함수 : 함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수
//고차 함수 : 매개 변수를 통해 함수의 외부에서 콜백 함수를 전달받은 함수 

//어떤일을 반복 수행하는 repeat 함수 정의

// n만큼 어떤 일을 반복한다
function repeat(n) {
    // i를 출력한다.
    for (var i = 0; i < n; i++) console.log(i);
  }
  
  repeat(5); // 0 1 2 3 4


//-------------------------------------------------------------
//repeat 함수의 반복문 내부에서 다른 일을 하고싶다면 함수를 새롭게 정의해야함.

// n만큼 어떤 일을 반복한다
function repeat1(n) {
    // i를 출력한다.
    for (var i = 0; i < n; i++) console.log(i);
  }
  
  repeat1(5); // 0 1 2 3 4
  
  // n만큼 어떤 일을 반복한다
  function repeat2(n) {
    for (var i = 0; i < n; i++) {
      // i가 홀수일 때만 출력한다.
      if (i % 2) console.log(i);
    }
  }
  
  repeat2(5); // 1 3


  
//-------------------------------------------------------------
//위의 두개 합체
//함수의 변하지 않는 공통 로직은 미리 정의해 두고, 경우에 따라 변경되는 로직은 추상화해서 함수 외부에서 내부로 전달.

// 외부에서 전달받은 f를 n만큼 반복 호출한다
function repeat3(n, f) {
    for (var i = 0; i < n; i++) {
      f(i); // i를 전달하면서 f를 호출. 경우에 따라 변경되는 일을 함수 f로 추상화했고 이를 외부에서 전달받음
    }
  }
  
  var logAll = function (i) {
    console.log(i);
  };
  
  // 반복 호출할 함수를 인수로 전달한다.
  repeat(5, logAll); // 0 1 2 3 4
  
  var logOdds = function (i) {
    if (i % 2) console.log(i);
  };
  
  // 반복 호출할 함수를 인수로 전달한다.
  repeat3(5, logOdds); // 1 3