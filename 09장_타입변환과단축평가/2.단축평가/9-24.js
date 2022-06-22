//단축평가의 유용한 사용
//2. 함수 매개변수에 기본값을 설정할 때 
//  - 함수를 호출할 때 인수를 전달하지 않으면 매개변수에는 undefined가 할당되는데 단축평가를 사용해서
//      매개변수의 기본값을 설정하면 undefined로 인해 발생할 수 있는 에러 방지 가능

// 단축 평가를 사용한 매개변수의 기본값 설정
function getStringLength(str) {
    str = str || '';
    return str.length;
  }
  
  getStringLength();     // -> 0
  getStringLength('hi'); // -> 2
  
  // ES6의 매개변수의 기본값 설정
  function getStringLength(str = '') {
    return str.length;
  }
  
  getStringLength();     // -> 0
  getStringLength('hi'); // -> 2