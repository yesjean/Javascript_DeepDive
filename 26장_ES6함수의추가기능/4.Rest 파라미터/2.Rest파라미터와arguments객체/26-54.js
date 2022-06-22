// ES5에서는 함수를 정의할 때 가변 인자 함수의 경우 arguments 객체를 활용하여 인수를 전달받음. 

// 매개변수의 개수를 사전에 알 수 없는 가변 인자 함수
function sum() {
    // 가변 인자 함수는 arguments 객체를 통해 인수를 전달받는다.
    console.log(arguments);
  }
  
  sum(1, 2); // {length: 2, '0': 1, '1': 2}


// arguments 객체는 유사 배열 객체이므로 배열 메서드를 사용하려면 Function.prototype.call 이나 
// Function.prototype.apply 메서드를 이용해 arguments 객체를 배열로 변환해야하는 번거로움이 있다.
function sum2() {
    // 유사 배열 객체인 arguments 객체를 배열로 변환한다.
    var array = Array.prototype.slice.call(arguments);
  
    return array.reduce(function (pre, cur) {
      return pre + cur;
    }, 0);
  }
  
  console.log(sum2(1, 2, 3, 4, 5)); // 15