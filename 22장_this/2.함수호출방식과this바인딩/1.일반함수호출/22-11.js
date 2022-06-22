//메서드 내부의 중첩 함구나 콜백 함수의 this 바인딩을 메서드의 this 바인딩과 일치시키기 위한 방법

var value = 1;

const obj = {
  value: 100,
  foo() {
    // this 바인딩(obj)을 변수 that에 할당한다.
    const that = this;

    // 콜백 함수 내부에서 this 대신 that을 참조한다.
    setTimeout(function () {
      console.log(that.value); // 100
    }, 100);
  }
};

obj.foo();

//외에도 Function.prototype.apply, Function.prototype.call, Function.prototype.bind 메서드를 제공함. 