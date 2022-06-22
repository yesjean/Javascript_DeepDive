//객체 자신의 고유 프로퍼티만 열거하기 위해서는 Object.keys/values/entries메서드 사용을 권장함.
//Object.keys 메서드는 객체 자신의 열거가능한 프로퍼티 키를 배열로 반환함. 


const person = {
    name: 'Lee',
    address: 'Seoul',
    __proto__: { age: 20 }
  };
  
  console.log(Object.keys(person)); // ["name", "address"]


//ES8에서 도입된 Object.values 메서드는 객체 자신의 열거가능한 프로퍼티 값을 배열로 반환함. 
console.log(Object.values(person));     //["Lee", "Seoul"]

//ES8에서 도입된 Object.entries 메서드는 객체 자신의 열거 가능한 프로퍼티 키와 값의 쌍의 배열을 배열에 담아 반환한다.
console.log(Object.entries(person)); // [["name", "Lee"], ["address", "Seoul"]]

Object.entries(person).forEach(([key, value]) => console.log(key, value));
/*
name Lee
address Seoul
*/