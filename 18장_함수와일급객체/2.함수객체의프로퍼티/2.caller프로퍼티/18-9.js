//caller : ECMAScript 사양에 포함되지 않은 비표준 프로퍼티 /사용X 참고로 알아두기...
//함수 객체의 caller 프로퍼티는 함수 자신을 호출한 함수를 가리킨다.


function foo(func) {
    return func();
  }
  
  function bar() {
    return 'caller : ' + bar.caller;
  }
  
  // 브라우저에서의 실행한 결과
  console.log(foo(bar)); // caller : function foo(func) {...}
  console.log(bar());    // caller : null