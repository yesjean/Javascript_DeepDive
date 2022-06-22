//빌트인 전역 함수 : 애플리케이션 전역에서 호출할 수 있는 빌트인 함수로서 전역 객체의 메서드이다.
/*
eval 함수 : 자바스크립트 코드를 나타내는 문자열을 인수로 전달 받음. 
            표현식이라면 -> 문자열 코드를 런타임에 평가하여 값을 생성
            표현식이 아닌 문 -> 코드를 런타임에 실행
            여러개의 문 -> 모든 문을 실행 
*/


// 표현식인 문
eval('1 + 2;'); // -> 3
// 표현식이 아닌 문
eval('var x = 5;'); // -> undefined

// eval 함수에 의해 런타임에 변수 선언문이 실행되어 x 변수가 선언되었다.
console.log(x); // 5

// 객체 리터럴은 반드시 괄호로 둘러싼다.
const o = eval('({ a: 1 })');
console.log(o); // {a: 1}

// 함수 리터럴은 반드시 괄호로 둘러싼다.
const f = eval('(function() { return 1; })');
console.log(f()); // 1


//인수로 전달받은 문자열 코드가 여러 개의 문으로 이루어져 있다면 모든 문을 실행한 다음, 마지막 결과값을 반환함.
eval('1 + 2; 3 + 4;')   // -> 7