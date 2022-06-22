// ES6 메서드가 아닌 함수는 super 키워드 사용 불가. 
// 내부 슬롯 [[HomeObject]]를 갖지 않기 때문


const derived = {
    __proto__: base,
    // sayHi는 ES6 메서드가 아니다.
    // 따라서 sayHi는 [[HomeObject]]를 갖지 않으므로 super 키워드를 사용할 수 없다.
    sayHi: function () {
      // SyntaxError: 'super' keyword unexpected here
      return `${super.sayHi()}. how are you doing?`;
    }
  };