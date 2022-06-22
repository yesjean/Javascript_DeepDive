//for문 : 반복 횟수가 명확할 때 주로 사용
//while문 : 반복 횟수가 불명확할 때 주로 사용

var count = 0;

// count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다.
while (count < 3) {
  console.log(count); // 0 1 2
  count++;
}

//무한루프
//while(true){}


//무한루프 탈출
var count = 0;

// 무한루프
while (true) {
  console.log(count);
  count++;
  // count가 3이면 코드 블록을 탈출한다.
  if (count === 3) break;
} // 0 1 2