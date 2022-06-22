//표현식 삽입 ${}
//표현식 삽입은 반드시 템플릿 리터럴 내에서 사용해야함. 일반 문자열에서의 삽입은 문자열로 취급 된다.


var first = 'Ung-mo';
var last = 'Lee';

// ES6: 표현식 삽입
console.log(`My name is ${first} ${last}.`); // My name is Ung-mo Lee.

//템플릿 리터럴 내 삽입 
console.log(`1 + 2 = ${1 + 2}`); // 1 + 2 = 3

//일반문자열에서 삽입
console.log(`1 + 2 = ${1 + 2}`) // 1 + 2 = ${1 + 2}
