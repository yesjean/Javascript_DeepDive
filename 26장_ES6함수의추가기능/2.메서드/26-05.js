// ES6에서 메서드는 축약 표현으로 정의된 함수만을 의미한다. 


const obj = {
    x: 1,
    // foo는 메서드이다.
    foo() { return this.x; },
    // bar에 바인딩된 함수는 메서드가 아닌 일반 함수이다.
    bar: function() { return this.x; }
  };
  
  console.log(obj.foo()); // 1
  console.log(obj.bar()); // 1


// ES6 메서드는 인스턴스를 생성할 수 없는 non-constructor이다. 
// 따라서 생성자 함수로서 호출 불가
new obj.foo();  //TypeError: obj.foo is not a constructor
new obj.bar();  //bar{}


// obj.foo는 constructor가 아닌 ES6 메서드이므로 prototype 프로퍼티가 없다.
obj.foo.hasOwnProperty('prototype'); // -> false

// obj.bar는 constructor인 일반 함수이므로 prototype 프로퍼티가 있다.
obj.bar.hasOwnProperty('prototype'); // -> true