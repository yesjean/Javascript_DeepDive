//재귀함수 : 함수가 자기 자신을 호출하는 것
//반복되는 처리를 위해 사용함. 


//10~0까지 출력 - 반복문 사용
function countdown(n) {
    for (var i = n; i >= 0; i--) console.log(i);
  }
  
  countdown(10);

//재귀함수 이용
  function countdown2(n) {
    if (n < 0) return;
    console.log(n);
    countdown2(n - 1); // 재귀 호출
  }
  
  countdown2(10);