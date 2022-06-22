// 두번째 인수로 콜백함수 내부에서 this로 사용할 객체를 전달가능

class Numbers {
    numberArray = [];
  
    multiply(arr) {
      arr.forEach(function (item) {
        // TypeError: Cannot read property 'numberArray' of undefined
        this.numberArray.push(item * item);
      });
    }
  }
  
  const numbers = new Numbers();
  numbers.multiply([1, 2, 3]);


