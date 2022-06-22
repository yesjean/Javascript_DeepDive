//생성자 함수는 동일한 프로퍼티 구조를 갖는 객체를 여러 개 생성할 때 유용함.


// 생성자 함수
function Circle(radius) {
    this.radius = radius;
    this.getArea = function () {
      // Math.PI는 원주율을 나타내는 상수다.
      return Math.PI * this.radius ** 2;
    };
  }
  
  // 반지름이 1인 인스턴스 생성
  const circle1 = new Circle(1);
  // 반지름이 2인 인스턴스 생성
  const circle2 = new Circle(2);
  
  // Circle 생성자 함수는 인스턴스를 생성할 때마다 동일한 동작을 하는
  // getArea 메서드를 중복 생성하고 모든 인스턴스가 중복 소유한다.
  // getArea 메서드는 하나만 생성하여 모든 인스턴스가 공유해서 사용하는 것이 바람직하다.
  console.log(circle1.getArea === circle2.getArea); // false
  
  console.log(circle1.getArea()); // 3.141592653589793
  console.log(circle2.getArea()); // 12.566370614359172

  //Circle생성자 함수는 인스턴스를 생성할 때 마다 getArea 메서드를 중복 생성하고 모든 인스턴스가 중복 소유한다.
  //동일한 생성자 함수에 의해 생성된 모든 인스턴스가 동일한 메서드를 중복 소유하는 것은 메모리를 불필요하게 낭비함. 