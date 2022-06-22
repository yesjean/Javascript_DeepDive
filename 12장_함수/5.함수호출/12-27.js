//반환문
//1. 반환문은 함수의 실행을 중단하고 함수 몸체를 빠져나감. -> 반환문 이후에 다른 문이 존재하면 그 문은 실행되지않고 무시된다.
//2. return 키워드 뒤에 오는 표현식을 평가해 반환한다. -> 지정하지 않으면 undefined가 반환된다. 

function multiply(x, y) {
    return x * y; // 반환문
  }
  
  // 함수 호출은 반환값으로 평가된다.
  var result = multiply(3, 5);
  console.log(result); // 15