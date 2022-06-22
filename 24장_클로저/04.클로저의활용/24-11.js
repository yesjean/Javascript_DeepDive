//클로저는 상태가 의도치 않게 변경되지 않도록 안전하게 은닉하고 특정 함수에게만 상태 변경을 허용하여 상태를
//안전하게 변경하고 유지하기 위해 사용한다.

// 카운트 상태 변경 함수
const increase = (function () {
    // 카운트 상태 변수
    let num = 0;
  
    // 클로저
    return function () {
      // 카운트 상태를 1만큼 증가 시킨다.
      return ++num;
    };
  }());
  
  console.log(increase()); // 1
  console.log(increase()); // 2
  console.log(increase()); // 3