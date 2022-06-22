//명시적 타입 변환(타입 캐스팅) : 개발자가 의도적으로 타입 변환
//암묵적 타입 변환(타입 강제 변환) : 개발자의 의도와 상관없이 자바스크립트 엔진에 의해 암묵적으로 타입 자동변환 

var x = 10;

// 명시적 타입 변환
// 숫자를 문자열로 타입 캐스팅한다.
var str = x.toString();
console.log(typeof str, str); // string 10

// x 변수의 값이 변경된 것은 아니다.
console.log(typeof x, x); // number 10