//값에 의한 전달
//변수에 원시 값을 갖는 변수를 할당하면 할당받는 변수(copy)에는 할당되는 변수(score)의 원시값이 복사되어 전달됨.

var score = 80;
var copy = score; //값에 의한 전달

console.log(score); // 80
console.log(copy);  // 80

score = 100;

console.log(score); // 100
console.log(copy);  // 80