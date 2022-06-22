//typeof 연산자 : 데이터 타입을 문자열로 반환 (정확하지 않음)

typeof ''              // -> "string"
typeof 1               // -> "number"
typeof NaN             // -> "number"
typeof true            // -> "boolean"
typeof undefined       // -> "undefined"
typeof Symbol()        // -> "symbol"
typeof null            // -> "object"  -> 자바스크립트의 첫 번째 버그
typeof []              // -> "object"
typeof {}              // -> "object"
typeof new Date()      // -> "object"
typeof /test/gi        // -> "object"
typeof function () {}  // -> "function"


//값이 null타입 인지 확인할 때는 일치연산자 사용
var foo = null;

typeof foo === null;    //false
foo === null;       //true

console.log(typeof(foo));
console.log(foo === null);