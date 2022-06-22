//화살표 함수
//생성자 함수로 사용X, 기존 함수와 this 바인딩 방식이 다름, prototype 프로퍼티 없음, arguments 객체 생성X 

// 화살표 함수
const add = (x, y) => x + y;
console.log(add(2, 5)); // 7