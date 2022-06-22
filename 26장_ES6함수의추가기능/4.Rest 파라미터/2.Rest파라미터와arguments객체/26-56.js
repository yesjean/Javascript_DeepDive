// ES6에서는 rest 파라미터를 사용해 가변 인자 함수의 인수 목록을 배열로 직접 전달받을 수 있다.

function sum(...args) {
    // Rest 파라미터 args에는 배열 [1, 2, 3, 4, 5]가 할당된다.
    return args.reduce((pre, cur) => pre + cur, 0);
  }
  console.log(sum(1, 2, 3, 4, 5)); // 15

// 함수와 ES6 메서드는 Rest 파라미터와 arguments 객체 모두 사용가능 
// 하지만 화살표 함수는 함수 자체의 argumnets 객체를 갖지 않기 때문에 
// 가변 인자 함수를 구현해야 할 때는 Rest 파라미터를 사용해야함. 