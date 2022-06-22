// ES6 화살표 함수 사용
// 화살표 함수는 this 바인딩을 갖지 않음.
// 화살표 함수 내부에서 this를 참조하면 add 메서드 내부의 this를 그대로 참조함. 

class Prefixer {
    constructor(prefix) {
      this.prefix = prefix;
    }
  
    add(arr) {
      // 화살표 함수 내부에서 this를 참조하면 상위 스코프의 this를 그대로 참조한다.
      return arr.map(item => this.prefix + item);
    }
  }
  
  const prefixer = new Prefixer('-webkit-');
  console.log(prefixer.add(['transition', 'user-select']));
  // ['-webkit-transition', '-webkit-user-select']