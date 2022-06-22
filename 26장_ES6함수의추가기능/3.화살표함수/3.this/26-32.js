// ES6에서 화살표 함수를 사용하여 콜백 함수 내부의 this 문제 해결 
// 화살표 함수는 함수 자체의 바인딩을 갖지 않으므로 내부에서 this를 참조하면
// 상위 스코프의 this를 그대로 참조함.
// 이를 lexical this라고 함.
// 마치 렉시컬 스코프 처럼 화살표 함수의 this가 함수가 정의된 위치에 의해 결정되는것을 의미함.


class Prefixer {
    constructor(prefix) {
      this.prefix = prefix;
    }
  
    add(arr) {
      return arr.map(item => this.prefix + item);
    }
  }
  
  const prefixer = new Prefixer('-webkit-');
  console.log(prefixer.add(['transition', 'user-select']));
  // ['-webkit-transition', '-webkit-user-select']