//const는 let과 마찬가지로 블록레벨 스코프를 가지며, 변수 호이스팅이 발생하지 않는것 처럼 동작함. 

{
    // 변수 호이스팅이 발생하지 않는 것처럼 동작한다
    console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
    const foo = 1;
    console.log(foo); // 1
  }
  
  // 블록 레벨 스코프를 갖는다.
  console.log(foo); // ReferenceError: foo is not defined