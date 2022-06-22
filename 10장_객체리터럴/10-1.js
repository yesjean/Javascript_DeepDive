//객체 리터럴 - 중괄호 내에 0개 이상의 프로퍼티를 정의한다 
//객체 리터럴의 중괄호는 코드 블록을 의미하지 X, 코드블록의 닫는 중괄호 뒤에는 ;을 붙이지 않음. 


var person = {
    name: 'Lee',
    sayHello: function () {
      console.log(`Hello! My name is ${this.name}.`);
    }
  };
  
  console.log(typeof person); // object
  console.log(person); // {name: "Lee", sayHello: ƒ}