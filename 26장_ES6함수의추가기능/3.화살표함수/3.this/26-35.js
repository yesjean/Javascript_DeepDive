// 화살표 함수가 전역 함수라면 화살표 함수의 this는 전역 객체를 가리킴.

// 전역 함수 foo의 상위 스코프는 전역이므로 화살표 함수 foo의 this는 전역 객체를 가리킨다.
const foo = () => console.log(this);
foo(); // window