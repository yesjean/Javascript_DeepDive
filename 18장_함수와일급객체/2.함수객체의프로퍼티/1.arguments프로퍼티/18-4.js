//함수객체의 arguments 프로퍼티 값은 arguments 객체다.
//arguments 객체는 함수 호출 시 전달된 인수들의 정보를 담고 있는 순회 가능한 유사 배열 객체이며 
//함수 내부에서 지역변수처럼 사용된다. 함수 외부에서 참조 X
//자바스크립트는 함수의 매개변수와 인수의 개수가 일치하는지 확인하지 않음.


function multiply(x, y) {
    console.log(arguments);
    return x * y;
  }
  
  console.log(multiply());        // NaN
  console.log(multiply(1));       // NaN
  console.log(multiply(1, 2));    // 2
  console.log(multiply(1, 2, 3)); // 2
