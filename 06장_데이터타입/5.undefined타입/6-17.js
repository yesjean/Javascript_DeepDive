//변수를 선언한 이후 값을 할당하지 않은 변수를 참조하면 undefined가 반환된다.
//var키워드로 선언한 변수는 확보된 메모리 공간을 처음 할당이 이루어질 때까지 빈 상태로 내버려두지 않고 자바스크립트 엔진이 undefined로 초기화함.

var foo;
console.log(foo);   // undefined