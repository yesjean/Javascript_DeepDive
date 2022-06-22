// 프로퍼티에 할당한 화살표 함수도 스코프 체인상에서 가장 가까운 함수중 화살표 함수가 아닌 함수의 this를 참조함.


// increase 프로퍼티에 할당한 화살표 함수의 상위 스코프는 전역이다.
// 따라서 increase 프로퍼티에 할당한 화살표 함수의 this는 전역 객체를 가리킨다.
const counter = {
    num: 1,
    increase: () => ++this.num
  };
  
  console.log(counter.increase()); // NaN