function multiply(x, y) {
    return x * y; // 반환문
    // 반환문 이후에 다른 문이 존재하면 그 문은 실행되지 않고 무시된다.
    console.log('실행되지 않는다.');
  }
  
  console.log(multiply(3, 5)); // 15

function foo (){
    //반환문을 생략하면 암묵적으로 undefined가 반환된다.
}
console.log(foo());