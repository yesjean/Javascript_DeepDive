// extends 키워드는 클래스뿐만 아니라 생성자 함수를 상속받아 클래스를 확장할 수도 있다.

// 생성자 함수
function Base(a) {
    this.a = a;
  }
  
  // 생성자 함수를 상속받는 서브클래스
  class Derived extends Base {}
  
  const derived = new Derived(1);
  console.log(derived); // Derived {a: 1}