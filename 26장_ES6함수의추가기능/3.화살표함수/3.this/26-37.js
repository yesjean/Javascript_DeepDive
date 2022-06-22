// 화살표 함수는 함수 자체의 this 바인딩을 가지지 않기때문에
// Function.prototype.call/apply/bind 메서드를 사용해도 화살표 함수 내부의 this 교체 불가 


window.x = 1;

const normal = function () { return this.x; };
const arrow = () => this.x;

console.log(normal.call({ x: 10 })); // 10
console.log(arrow.call({ x: 10 }));  // 1



// Function.prototype.call/apply/bind 메서드를 호출할 수 없다는 의미 X
// 함수자체의 this 바인딩을 갖지 않기 때문에 this를 교체할 수 없고 언제나 상위 스코프의 this 바인딩을 참조함. 
const add = (a, b) => a + b;

console.log(add.call(null, 1, 2));    // 3
console.log(add.apply(null, [1, 2])); // 3
console.log(add.bind(null, 1, 2)());  // 3