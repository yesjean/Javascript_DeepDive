//apply와 call 메서드는 호출할 함수에 인수를 전달하는 방식만 다를 뿐 this로 사용할 객체를 전달하면서 함수를 호출하는 것은 동일함. 
//대표적인 용도 : arguments 객체와 같은 유사 배열 객체에 배열 메서드를 사용하는 경우


function getThisBinding() {
    console.log(arguments);
    return this;
  }
  
  // this로 사용할 객체
  const thisArg = { a: 1 };
  
  // getThisBinding 함수를 호출하면서 인수로 전달한 객체를 getThisBinding 함수의 this에 바인딩한다.
  // apply 메서드는 호출할 함수의 인수를 배열로 묶어 전달한다.
  console.log(getThisBinding.apply(thisArg, [1, 2, 3]));
  // Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
  // {a: 1}
  
  // call 메서드는 호출할 함수의 인수를 쉼표로 구분한 리스트 형식으로 전달한다.
  console.log(getThisBinding.call(thisArg, 1, 2, 3));
  // Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
  // {a: 1}