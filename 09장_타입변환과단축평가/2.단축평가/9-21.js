//단축 평가를 사용하여 if문 대체하기 : 조건이 false 일 때 무언가를 해야한다면 논리합(||) 으로 대체 가능

var done = false;
var message = '';

// 주어진 조건이 false일 때
if (!done) message = '미완료';

// if 문은 단축 평가로 대체 가능하다.
// done이 false라면 message에 '미완료'를 할당
message = done || '미완료';
console.log(message); // 미완료