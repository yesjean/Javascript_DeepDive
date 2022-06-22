//자바스크립트 엔진은 암묵적인 처리를 통해 인스턴스를 생성하고 반환함.
//new 연산자와 함게 생성자 함수를 호출하면 다음과 같은 과정이 일어남. 


//1. 인스턴스 생성과 this 바인딩 (바인딩 : 식별자와 값을 연결하는 과정)
function Circle(radius) {
    // 1. 암묵적으로 빈 객체가 생성되고 this에 바인딩된다.
    console.log(this); // Circle {}
  
    this.radius = radius;
    this.getDiameter = function () {
      return 2 * this.radius;
    };
  }


  
//2. 인스턴스 초기화 
function Circle(radius) {
    // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
  
    // 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
    this.radius = radius;
    this.getDiameter = function () {
      return 2 * this.radius;
    };
  }



//3. 인스턴스 반환 
//생성자 함수 내부의 모든 처리가 끝나면 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다. 
function Circle(radius) {
    // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
  
    // 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
    this.radius = radius;
    this.getDiameter = function () {
      return 2 * this.radius;
    };
  
    // 3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다
  }
  
  // 인스턴스 생성. Circle 생성자 함수는 암묵적으로 this를 반환한다.
  const circle = new Circle(1);
  console.log(circle); // Circle {radius: 1, getDiameter: ƒ}




//만약 this가 아닌 다른 객체를 명시적으로 반환하면 this가 반환되지 못하고 return문에 명시한 객체가 반환된다.
function Circle(radius) {
    // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
  
    // 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
    this.radius = radius;
    this.getDiameter = function () {
      return 2 * this.radius;
    };
  
    // 3. 암묵적으로 this를 반환한다.
    // 명시적으로 객체를 반환하면 암묵적인 this 반환이 무시된다.
    return {};
  }
  // 인스턴스 생성. Circle 생성자 함수는 명시적으로 반환한 객체를 반환한다.
  const circle2 = new Circle(1);
  console.log(circle); // {}




//하지만 명시적으로 원시 값을 반환하면 원시 값 반환은 무시되고 암묵적으로 this가 반환된다.
function Circle(radius) {
    // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
  
    // 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
    this.radius = radius;
    this.getDiameter = function () {
      return 2 * this.radius;
    };
  
    // 3. 암묵적으로 this를 반환한다.
    // 명시적으로 원시값을 반환하면 원시값 반환은 무시되고 암묵적으로 this가 반환된다.
    return 100;
  }
  
  // 인스턴스 생성. Circle 생성자 함수는 명시적으로 반환한 객체를 반환한다.
  const circle3 = new Circle(1);
  console.log(circle); // Circle {radius: 1, getDiameter: ƒ}