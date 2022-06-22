
//strict mode를 적용하려면 전역의 선두 또는 함수 몸체의 선두에 'use strict'; 를 추가한다. 
'use strict';

function foo() {
  x = 10; // ReferenceError: x is not defined
}
foo();

//함수 몸체의 선두에 추가하면 해당 함수와 중첩 함수에 strict mode가 적용된다.
function foo2() {
    'use strict';
  
    x = 10; // ReferenceError: x is not defined
  }
  foo2();


//코드의 선두에 'use strict';를 위치시키지 않으면 stric mode가 제대로 동작하지 않음.
function foo3() {
    x = 10; // 에러를 발생시키지 않는다.
    'use strict';
  }
  foo3();
