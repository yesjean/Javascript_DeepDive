//정수만을 위한 타입 X 모든 수를 실수로 처리함. 
//정수로 표시된다고 해도 사실은 실수. ==> 정수로 표시되는 수끼리 나누더라도 실수가 나올 수 있다.

// 숫자 타입은 모두 실수로 처리된다.
console.log(1 === 1.0); // true
console.log(4 / 2);     // 2
console.log(3 / 2);     // 1.5

