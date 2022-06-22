//for~in 문은 객체의 프로토타입 체인 상에 존재하는 모든 프로토타입의 프로퍼티 중에서
//프로퍼티 어트리뷰트 [[Enumerable]]의 값이 true인 프로퍼티를 순회하며 열거한다.

const person = {
    name: 'Lee',
    address: 'Seoul',
    __proto__: { age: 20 }
  };
  
  for (const key in person) {
    console.log(key + ': ' + person[key]);
  }
  // name: Lee
  // address: Seoul
  // age: 20


//for~in 문은 프로퍼티 키가 심벌인 프로퍼티는 열거하지 않는다
const sym = Symbol();
const obj = {
  a: 1,
  [sym]: 10
};

for (const key in obj) {
  console.log(key + ': ' + obj[key]);
}
// a: 1