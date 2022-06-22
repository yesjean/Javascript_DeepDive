let foo = 1; // 전역 변수

{
  console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
  let foo = 2; // 지역 변수
}

//let으로 선언한 변수의 경우 호이스팅이 발생하지 않는다면 전역 변수 foo의 값을 출력 해야한다.
//하지만 let으로 선언한 변수도 호이스팅이 발생하기 때문에 참조에러(ReferenceError)가 발생한다. 
