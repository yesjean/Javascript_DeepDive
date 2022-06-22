//Object 생성자 함수를 인수 없이 호출하면 빈 객체가 생성된다.
//Object 생성자 함수를 호출하면 객체 리터럴과 마찬가지로 추상 연산 OrdinaryObjectCreate가 호출된다.
//Object 생성자 함수에 의해 생성되는 객체의 프로토타입은 Object.prototype이다. 

const obj1 = new Object();
obj1.x = 1;



const obj = new Object();
obj.x = 1;

// Object 생성자 함수에 의해 생성된 obj 객체는 Object.prototype을 상속받는다.
console.log(obj.constructor === Object); // true
console.log(obj.hasOwnProperty('x'));    // true

//객체 리터럴 방식은 객체 리터럴 내부에 프로퍼티를 추가 하지만 
//Object 생성자 함수 방식은 일단 빈 객체를 생성한 후 프로퍼티를 추가 해야한다.