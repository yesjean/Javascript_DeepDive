//객체 리터럴에 의한 객체 생성 방식은 단 하나의 객체만 생성함.
//따라서 동일한 프로퍼티를 갖는 객체를 여러 개 생성해야 하는 경우 매번 같은 프로퍼티를 기술해야 하기 때문에 비효율적이다.


const circle1 = {
    radius: 5,
    getDiameter() {
      return 2 * this.radius;
    }
  };
  
  console.log(circle1.getDiameter()); // 10
  
  const circle2 = {
    radius: 10,
    getDiameter() {
      return 2 * this.radius;
    }
  };
  
  console.log(circle2.getDiameter()); // 20