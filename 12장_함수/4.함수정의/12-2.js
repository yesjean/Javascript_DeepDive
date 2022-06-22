
// 함수 정의 : 함수 선언문을 통한 정의
function add(x, y) {
    return x + y;
  }

//함수 호출
var result = add(2,5);
console.log(result);

//함수 표현식
var add2 = function(x,y){
    return x+y;
};

//function 생성자 함수
var add3 = new Function('x', 'y', 'return x+y');

//화살표 함수
var add4 = (x, y) => x+y;