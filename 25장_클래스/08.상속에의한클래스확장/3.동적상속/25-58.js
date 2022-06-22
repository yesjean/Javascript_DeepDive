// extends 키워드 다음에는 클래스뿐만 아니라 [[Constructor]] 내부 메서드를 갖는 함수 객체로
// 평가될 수 있는 모든 표현식을 사용할 수 있다.
// 이를 통해 동적으로 상속받을 대상 결정 가능


function Base1() {}

class Base2 {}

let condition = true;

// 조건에 따라 동적으로 상속 대상을 결정하는 서브클래스
class Derived extends (condition ? Base1 : Base2) {}

const derived = new Derived();
console.log(derived); // Derived {}

console.log(derived instanceof Base1); // true
console.log(derived instanceof Base2); // false