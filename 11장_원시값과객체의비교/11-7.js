var score = 80;

// copy 변수에는 score 변수의 값 80이 복사되어 할당된다.
var copy = score;

console.log(score, copy); // 80  80
console.log(score === copy); // true

//score변수와 copy변수는 숫자값 80을 갖는다는 점에서 동일함. 
//하지만 score과 copy의 값80은 다른 메모리 공간에 저장된 별개의 값이다.