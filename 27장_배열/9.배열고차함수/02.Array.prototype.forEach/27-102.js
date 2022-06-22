// 더 나은 방법은 화살표 함수 사용
// 화살표 함수는 함수 자체의 this 바인딩을 가지지 않음.
// 화살표 함수 내부에서 this를 참조하면 상위스코프를 그대로 참조함. 
// = multiply메서드 내부의 this를 그대로 참조한다.

class Numbers {
    numberArray = [];
  
    multiply(arr) {
      // 화살표 함수 내부에서 this를 참조하면 상위 스코프의 this를 그대로 참조한다.
      arr.forEach(item => this.numberArray.push(item * item));
    }
  }
  
  const numbers = new Numbers();
  numbers.multiply([1, 2, 3]);
  console.log(numbers.numberArray); // [1, 4, 9]