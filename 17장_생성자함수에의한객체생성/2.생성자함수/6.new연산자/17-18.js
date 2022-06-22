//new 연산자 없이 생성자 함수를 호출하면 일반함수로 호출된다. [[Call]]이 호출된다.


// 생성자 함수 : 첫 문자를 대문자로 기술하는 파스칼 케이스로 명명하여 일반함수와 구별함. 
function Circle(radius) {
    this.radius = radius;
    this.getDiameter = function () {
      return 2 * this.radius;
    };
  }
  
  // new 연산자 없이 생성자 함수 호출하면 일반 함수로서 호출된다.
  const circle = Circle(5);
  console.log(circle); // undefined
  
  // 일반 함수 내부의 this는 전역 객체 window를 가리킨다.
  console.log(radius); // 5
  console.log(getDiameter()); // 10
  
  circle.getDiameter();
  // TypeError: Cannot read property 'getDiameter' of undefined