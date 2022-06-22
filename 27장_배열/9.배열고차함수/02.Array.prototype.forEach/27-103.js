// forEach의 동작을 이해하기위한 forEach 폴리필 살펴보기
// 폴리필 : 최신 사양의 기능을 지원하지 않는 브라우저를 위해 누락된 최신 사영의 기능을 구현하여 추가하는 것

// 만약 Array.prototype에 forEach 메서드가 존재하지 않으면 폴리필을 추가한다.
if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (callback, thisArg) {
      // 첫 번째 인수가 함수가 아니면 TypeError를 발생시킨다.
      if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
      }
  
      // this로 사용할 두 번째 인수를 전달받지 못하면 전역 객체를 this로 사용한다.
      thisArg = thisArg || window;
  
      // for 문으로 배열을 순회하면서 콜백 함수를 호출한다.
      for (var i = 0; i < this.length; i++) {
        // call 메서드를 통해 thisArg를 전달하면서 콜백 함수를 호출한다.
        // 이때 콜백 함수의 인수로 배열 요소, 인덱스, 배열 자신을 전달한다.
        callback.call(thisArg, this[i], i, this);
      }
    };
  }


// forEach문도 내부에서는 반복문을 통해 배열을 순회할 수 밖에 없음.
// 단 반복문을 메서드 내부로 은닉하여 로직의 흐름을 이해하기 쉽게하고 복잡성을 해결함
