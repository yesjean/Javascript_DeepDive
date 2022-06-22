//예제 1, 2 this를 사용해서 수정 


// 22-1 객체 리터럴
const circle = {
    radius: 5,
    getDiameter() {
      // this는 메서드를 호출한 객체를 가리킨다. => circle 
      return 2 * this.radius;
    }
  };
  
  console.log(circle.getDiameter()); // 10



// 22-2 생성자 함수
function Circle(radius) {
    // this는 생성자 함수가 생성할 인스턴스를 가리킨다.
    this.radius = radius;
  }
  
  Circle.prototype.getDiameter = function () {
    // this는 생성자 함수가 생성할 인스턴스를 가리킨다.
    return 2 * this.radius;
  };
  
  // 인스턴스 생성
  const circle2 = new Circle(5);
  console.log(circle2.getDiameter()); // 10


