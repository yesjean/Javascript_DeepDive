
// for~in 문 : 객체의 모든 프로퍼티를 순회하면 열거 
// for(변수선언문 in 객체)

const person = {
    name: 'Lee',
    address: 'Seoul'
  };
  
  // for...in 문의 변수 prop에 person 객체의 프로퍼티 키가 할당된다.
  for (const key in person) {
    console.log(key + ': ' + person[key]);
  }
  // name: Lee
  // address: Seoul

//for~in 문은 in 연산자처럼 순회 대상 객체의 프로퍼티 뿐만 아니라 상속받은 프로토타입의 프로퍼티까지 열거한다.
//하지만 위 에제의 경우 toString과 같은 Object.prototype의 프로퍼티가 열거되지 않는다.
