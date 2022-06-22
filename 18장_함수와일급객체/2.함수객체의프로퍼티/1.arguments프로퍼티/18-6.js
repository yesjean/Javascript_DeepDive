//매개변수의 개수와 인수의 개수를 확인하지 않는 자바스크립트의 특성 때문에 
//함수가 호출되면 인수 개수를 확인하고 이에 따라 함수의 동작을 달리 정의할 필요가 있을 수 있다.
//이때 유용하게 사용되는 것이 arguments 객체다. 매개변수 개수를 확정할 수 없는 가변 인자 함수를 구현할 때 유용함.



function sum() {
    let res = 0;
  
    // arguments 객체는 length 프로퍼티가 있는 유사 배열 객체이므로 for 문으로 순회할 수 있다.
    for (let i = 0; i < arguments.length; i++) {
      res += arguments[i];
    }
  
    return res;
  }
  
  console.log(sum());        // 0
  console.log(sum(1, 2));    // 3
  console.log(sum(1, 2, 3)); // 6