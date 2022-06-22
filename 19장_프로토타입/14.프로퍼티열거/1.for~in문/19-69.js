//상속받은 프로퍼티는 제외하고 객체 자신의 프로퍼티만 열거하려면 Object.prototype.hasOwnProperty 메서드를 사용하여 객체 자신의 프로퍼티인지 확인해야한다.

const person = {
    name: 'Lee',
    address: 'Seoul',
    __proto__: { age: 20 }
  };
  
  for (const key in person) {
    // 객체 자신의 프로퍼티인지 확인한다.
    if (!person.hasOwnProperty(key)) continue;
    console.log(key + ': ' + person[key]);
  }
  // name: Lee
  // address: Seoul