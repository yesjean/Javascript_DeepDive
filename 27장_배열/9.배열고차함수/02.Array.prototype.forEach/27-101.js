// this와 multiply를 일치 시키려면 두번째 인수로 콜백함수 내부에서 this로 사용할 객체를 전달한다.

class Numbers {
    numberArray = [];
  
    multiply2(arr) {
      arr.forEach(function (item) {
        this.numberArray.push(item * item);
      }, this); // forEach 메서드의 콜백 함수 내부에서 this로 사용할 객체를 전달
    }
  }
  
  const numbers2 = new Numbers();
  numbers2.multiply2([1, 2, 3]);
  console.log(numbers2.numberArray); // [1, 4, 9]