//식별자 네이밍 규칙을 준수 해야함. 

var person = {
    firstName: 'Yejin',     //식별자 네이밍 규칙을 준수하는 프로퍼티 키
    'last-name': 'Yu'       //식별자 네이밍 규칙을 준수하지 않는 프로퍼티 키는 ''로 묶음
};                          //그대로 사용하면 -연산자가 있는 표현식으로 해석됨. -> SyntaxError: Unexpected token - 

console.log(person);

//프로퍼티 키를 동적으로 생성하기 
//프로퍼티 키로 사용할 표현식을 []로 묶음 
var obj = {};
var key = 'hello';

// ES5: 프로퍼티 키 동적 생성
obj[key] = 'world';
// ES6: 계산된 프로퍼티 이름
// var obj = { [key]: 'world' };

console.log(obj); // {hello: "world"}

