// 정적메서드와 프로토타입 메서드의 차이
// 1. 자신이 속해있는 프로토타입 체인이 다름
// 2. 정적메서드는 클래스로 호출, 프로토타입 메서드는 인스턴스로 호출
// 3. 정적메서드는 인스턴스 프로퍼티를 참조할 수 없지만, 프로토타입 메서드는 가능



class Square {
    // 정적 메서드
    static area(width, height) {
      return width * height;
    }
  }
  
  console.log(Square.area(10, 10)); // 100

// 정적메서드는 인스턴스 프로퍼티를 참조하지 않음
// 인스턴스 프로퍼티를 참조해야 한다면 프로토타입메서드를 사용해야한다.

  class Square2 {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    // 프로토타입 메서드
    area() {
      return this.width * this.height;
    }
  }
  
  const square = new Square2(10, 10);
  console.log(square.area()); // 100