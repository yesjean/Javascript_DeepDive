//Function.prototype.apply, Function.prototype.call 메서드는 this로 사용할 객체와
//인수 리스트를 인수로 전달받아 함수를 호출함
/*
apply와 call 메서드 사용법

주어진 this 바인딩과 인수 리스트 배열을 사용하여 함수를 호출함
@param thisArg      -this로 사용할 객체
@param arg1, arg2,...   -함수에게 전달할 인수 리스트의 배열 또는 유사 배열 객체
@returns        -호출된 함수의 반환값

Function.prototype.apply(thisArgs[, argsArray])


주어진 this 바인딩과 ,로 구분된 인수 리스트를 사용하여 함수를 호출함
@param thisArg      -this로 사용할 객체
@param arg1, arg2,...   -함수에게 전달할 인수 리스트
@returns        -호출된 함수의 반환값

Function.prototype.call(thisArgs[, arg1[, arg2[, ...]]])
*/

function getThisBinding() {
    return this;
  }
  
  // this로 사용할 객체
  const thisArg = { a: 1 };
  
  console.log(getThisBinding()); // window
  
  // getThisBinding 함수를 호출하면서 인수로 전달한 객체를 getThisBinding 함수의 this에 바인딩한다.
  console.log(getThisBinding.apply(thisArg)); // {a: 1}
  console.log(getThisBinding.call(thisArg)); // {a: 1}