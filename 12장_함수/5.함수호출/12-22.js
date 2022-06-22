function add(x, y) {
    return x + y;
  }
  
  console.log(add(2));        // NaN
  console.log(add('a', 'b')); // 'ab'

//코드상으로는 어떤 타입의 인수를 전달해야하는지, 어떤 타입의 값을 반환하는지 명확하지 않음.
//1. 자바스크립트 함수는 매개변수와 인수의 개수가 일치하는지 확인하지 않음
//2. 자바스크립트는 동적언어이다. 따라서 자바스크립트 함수는 매개변수의 타입을 사전에 지정할 수 없다.
