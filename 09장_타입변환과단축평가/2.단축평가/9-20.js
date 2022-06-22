//단축 평가를 사용하여 if문 대체하기 : 어떤 조건이 true일때 무언가를 해야한다면 논리곱(&&)으로 대체 가능

var done = true;
var message = '';

// 주어진 조건이 true일 때
if (done) message = '완료';

// if 문은 단축 평가로 대체 가능하다.
// done이 true라면 message에 '완료'를 할당
message = done && '완료';
console.log(message); // 완료