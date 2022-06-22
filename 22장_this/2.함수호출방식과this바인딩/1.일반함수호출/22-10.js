//콜백 함수가 일반 함수로 호출된다면 콜백 함수의 this에도 전역 객체가 바인딩된다.
//어떠한 함수라도 일반 함수로 호출되면 this에 전역 객체가 바인딩된다.

//중첩 함수, 콜백 함수는 외부 함수를 돕는 헬퍼 함수의 역할을 하므로 외부 함수의 일부 로직을 대신하는 경우가 대부분이다.
//하지만, 외부 함수인 메서드와 중첩 함수 또는 콜백 함수의 this가 일치하지 않는다는 것은 헬퍼 함수로 동작하기 어렵게 만든다. 

var value = 1;

const obj = {
  value: 100,
  foo() {
    console.log("foo's this: ", this); // {value: 100, foo: ƒ}
    // 콜백 함수 내부의 this에는 전역 객체가 바인딩된다.
    setTimeout(function () {
      console.log("callback's this: ", this); // window
      console.log("callback's this.value: ", this.value); // 1
    }, 100);
  }
};

obj.foo();