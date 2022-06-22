//클로저는 상태가 의도치 않게 변경되지 않도록 상태를 안전하게 은닉하고 특정함수에게만 상태 변경을 허용하기 위해 사용한다.


// 카운트 상태 변수
let num = 0;

// 카운트 상태 변경 함수
const increase = function () {
  // 카운트 상태를 1만큼 증가 시킨다.
  return ++num;
};

console.log(increase()); // 1
console.log(increase()); // 2
console.log(increase()); // 3

//동작은 잘 하지만 바르게 동작하려면 다음의 전제조건이 지켜져야함.
//1. 카운트 상태는 increase 함수가 호출되기 전까지 변경되지 않고 유지되어야함.
//2. 이를 위해 카운트 상태(num 변수의 값)는 increase 함수만이 변경할 수 있어야한다. 

//하지만 카운트 상태는 전역 변수를 통해 관리되고 있어서 누구나 접근가능하고 변경할 수 있음.


//카운트 상태를 increase 함수만이 num변수를 참조하고 변경할 수 있게 하는것이 좋음

// 카운트 상태 변경 함수
const increase2 = function () {
    // 카운트 상태 변수
    let num = 0;
  
    // 카운트 상태를 1만큼 증가 시킨다.
    return ++num;
  };
  
  // 이전 상태를 유지하지 못한다.
  console.log(increase2()); // 1
  console.log(increase2()); // 1
  console.log(increase2()); // 1


//이전 상태를 유지하도록 클로저를 사용해야함.
