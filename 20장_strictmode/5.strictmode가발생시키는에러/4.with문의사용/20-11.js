//with문은 전달된 객체를 스코프 체인에 추가한다. 
//with문은 동일한 객체의 프로퍼티를 반복해서 사용할 때 객체 이름을 생략할 수 있어서 코드가 간단해짐. 
//하지만 성능과 가독성이 나빠지므로  사용X


// (function () {
//     'use strict';
  
//     // SyntaxError: Strict mode code may not include a with statement
//     with({ x: 1 }) {
//       console.log(x);
//     }
//   }());