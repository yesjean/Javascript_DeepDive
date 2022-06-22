//Object.is 메서드 
//ES6에서 도입. 예측가능한 정확한 비교 결과를 반환. 그 외에는 일치 연산자와 동일하게 작동됨.

-0 === +0;         // -> true
Object.is(-0, +0); // -> false

NaN === NaN;         // -> false
Object.is(NaN, NaN); // -> true