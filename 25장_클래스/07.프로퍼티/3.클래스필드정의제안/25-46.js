// 함수는 일급 객체이므로 클래스 필드에 할당가능.
// 따라서 클래스 필드를 통해 메서드 정의가능. 

class Person {
    // 클래스 필드에 문자열을 할당
    name = 'Lee';
  
    // 클래스 필드에 함수를 할당
    getName = function () {
      return this.name;
    }
    // 화살표 함수로 정의할 수도 있다.
    // getName = () => this.name;
  }
  
  const me = new Person();
  console.log(me); // Person {name: "Lee", getName: ƒ}
  console.log(me.getName()); // Lee


// 클래스 필드에 함수를 할당하는 경우 함수는 프로토타입 메서드가 아닌 인스턴스 메서드가 된다.
// 모든 클래스 필드는 인스턴스 프로퍼티가 되기 때문.
// 따라서 클래스 필드에 함수를 할당하는 것은 권장하지 않음. 