//일치연산자(===)에서 주의할 것 

//NaN
// NaN은 자신과 일치하지 않는 유일한 값이다.
NaN === NaN; // -> false

//숫자가 NaN인지 조사하려면 빌트인 함수 Number.isNaN을 사용한다. 
// Number.isNaN 함수는 지정한 값이 NaN인지 확인하고 그 결과를 불리언 값으로 반환한다.
Number.isNaN(NaN); // -> true
Number.isNaN(10);  // -> false
Number.isNaN(1 + undefined); // -> true

//0
// 양의 0과 음의 0의 비교. 일치 비교/동등 비교 모두 결과는 true이다.
0 === -0; // -> true
0 == -0;  // -> true