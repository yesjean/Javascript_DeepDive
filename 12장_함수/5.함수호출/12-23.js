//함수를 정의할 때 적절한 인수가 전달되었는지 확인할 필요가 있다.

function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
      // 매개변수를 통해 전달된 인수의 타입이 부적절한 경우 에러를 발생시킨다.
      throw new TypeError('인수는 모두 숫자 값이어야 합니다.');
    }
  
    return x + y;
  }
  
  console.log(add(2));        // TypeError: 인수는 모두 숫자 값이어야 합니다.
  console.log(add('a', 'b')); // TypeError: 인수는 모두 숫자 값이어야 합니다.