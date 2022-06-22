// 화살표 함수가 일반함수와 구별되는 가장 큰 특징은 바로 this. 다르게 동작함. 
// 화살표 함수는 콜백함수로 사용되는 경우가 많다.



class Prefixer {
    constructor(prefix) {
      this.prefix = prefix;
    }
  
    add(arr) {
      // add 메서드는 인수로 전달된 배열 arr을 순회하며 배열의 모든 요소에 prefix를 추가한다.
      // ① 여기서 this는 prefix 객체를 가리킴
      return arr.map(function (item) {
        return this.prefix + item; // ②여기서 this는 undefined. map메서드가 콜백함수를 일반함수로서 호출하기때문.
        // -> TypeError: Cannot read property 'prefix' of undefined
      });
    }
  }
  
  const prefixer = new Prefixer('-webkit-');
  console.log(prefixer.add(['transition', 'user-select']));

// 일반 함수로서 호출되는 모든 함수 내부의 this는 전역 객체를 가리킴.
// 클래스 내부의 모든 코드에는 strict mode가 적용된다.
// 따라서 map메서드의 콜백 함수에도 strict mode가 적용됨. 
// strict mode에서 일반 함수로 호출된 모든 함수 내부의 this에는 undefined가 바인딩됨.