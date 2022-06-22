//외부 상태 변경이나 가변 데이터를 피하고 불변성을 지향하는 함수형 프로그래밍에서 
//부수 효과를 최대한 억제하여 오류를 피하고 프로그램의 안정성을 높이기위해 클로저는 적극적으로 사용된다.


// 함수를 인수로 전달받고 함수를 반환하는 고차 함수
// 이 함수는 카운트 상태를 유지하기 위한 자유 변수 counter를 기억하는 클로저를 반환한다.
function makeCounter(aux) {
    // 카운트 상태를 유지하기 위한 자유 변수
    let counter = 0;
  
    // 클로저를 반환
    return function () {
      // 인수로 전달 받은 보조 함수에 상태 변경을 위임한다.
      counter = aux(counter);
      return counter;
    };
  }
  
  // 보조 함수
  function increase(n) {
    return ++n;
  }
  
  // 보조 함수
  function decrease(n) {
    return --n;
  }
  
  // 함수로 함수를 생성한다.
  // makeCounter 함수는 보조 함수를 인수로 전달받아 함수를 반환한다
  const increaser = makeCounter(increase); // ①
  console.log(increaser()); // 1
  console.log(increaser()); // 2
  
  // increaser 함수와는 별개의 독립된 렉시컬 환경을 갖기 때문에 카운터 상태가 연동하지 않는다.
  const decreaser = makeCounter(decrease); // ②
  console.log(decreaser()); // -1
  console.log(decreaser()); // -2