//생성자 함수의 역할
//프로퍼티 구조가 동일한 인스턴스를 생성하기 위한 템플릿(클래스)으로서 동작하여 인스턴스를 생성하는 것,  [필수]
//생성된 인스턴스를 초기화(인스턴스 프로퍼티 추가 및 초기값 할당) 하는것  [옵션]



// 생성자 함수
function Circle(radius) {
    // 인스턴스 초기화
    this.radius = radius;
    this.getDiameter = function () {
      return 2 * this.radius;
    };
  }
  
  // 인스턴스 생성
  const circle1 = new Circle(5);  // 반지름이 5인 Circle 객체를 생성