//캡슐화는 객체의 상태를 나타내는 프로퍼티와 프로퍼티를 참조하고 조작할 수 있는 동작인 메서드를 하나로 묶는 것을 말함. 
//정보은닉 - 객체의 특정 프로퍼티나 메서드를 감출 목적으로 사용하는 캡슐화 


function Person(name, age) {
    this.name = name; // public
    let _age = age;   // private
  
    // 인스턴스 메서드
    this.sayHi = function () {
      console.log(`Hi! My name is ${this.name}. I am ${_age}.`);
    };
  }
  
  const me = new Person('Lee', 20);
  me.sayHi(); // Hi! My name is Lee. I am 20.
  console.log(me.name); // Lee
  console.log(me._age); // undefined
  
  const you = new Person('Kim', 30);
  you.sayHi(); // Hi! My name is Kim. I am 30.
  console.log(you.name); // Kim
  console.log(you._age); // undefined

  //sayHi 메서드는 인스턴스 메서드이므로 Person객체가 생성될 때마다 중복 생성된다.
  