//생성자 함수 : new 연산자와 함께 호출하여 객체를 생성하는 함수. 생성자 함수에 의해 생성된 객체를 인스턴스라고 함. 
//자바스크립트가 제공하는 생성자 함수 
//Object, String, Number, Boolean, Function, Array, Date, Regexp, Promise...



// String 생성자 함수에 의한 String 객체 생성
const strObj = new String('Lee');
console.log(typeof strObj); // object
console.log(strObj);        // String {"Lee"}

// Number 생성자 함수에 의한 Number 객체 생성
const numObj = new Number(123);
console.log(typeof numObj); // object
console.log(numObj);        // Number {123}

// Boolean 생성자 함수에 의한 Boolean 객체 생성
const boolObj= new Boolean(true);
console.log(typeof boolObj); // object
console.log(boolObj);        // Boolean {true}

// Function 생성자 함수에 의한 Function 객체(함수) 생성
const func = new Function('x', 'return x * x');
console.log(typeof func); // function
console.dir(func);        // ƒ anonymous(x)

// Array 생성자 함수에 의한 Array 객체(배열) 생성
const arr = new Array(1, 2, 3);
console.log(typeof arr); // object
console.log(arr);        // [1, 2, 3]

// RegExp 생성자 함수에 의한 RegExp 객체(정규 표현식) 생성
const regExp = new RegExp(/ab+c/i);
console.log(typeof regExp); // object
console.log(regExp);        // /ab+c/i

// Date 생성자 함수에 의한 Date 객체 생성
const date = new Date();
console.log(typeof date); // object
console.log(date);        // Mon May 04 2020 08:36:33 GMT+0900 (대한민국 표준시)


//반드시 Object 생성자 함수를 사용해 빈 객체를 생성해야 하는것은 아님. 
//객체 생성 방법은 객체 리터럴을 사용하는 것이 더 간편하다.
//Object 생성자 함수를 이용해 객체생성하는 방식은 특별한 이유가 없다면 ㅂㄹ