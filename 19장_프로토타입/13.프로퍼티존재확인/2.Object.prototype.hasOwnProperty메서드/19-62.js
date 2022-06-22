
// Object.prototype.hasOwnProperty메서드를 이용해서 객체에 특정 프로퍼티가 존재하는지 확인

console.log(person.hasOwnProperty('name')); // true
console.log(person.hasOwnProperty('age'));  // false

//전달받은 프로퍼티 키가 객체 고유의 프로퍼티인 경우에만 true, 상속받은 프로토타입의 프로퍼티인 경우 false 
console.log(person.hasOwnProperty('toString')); // false