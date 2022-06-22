//원시값은 변경 불가능한 값. 원시값을 갖는 변수의 값을 변경하려면 재할당 해야함.
//하지만 객체는 변경가능한 값.
//재할당 없이 프로퍼티를 동적으로 추가 가능, 갱신, 삭제 가능.

var person = {
    name: 'Lee'
  };
  
  // 프로퍼티 값 갱신
  person.name = 'Kim';
  
  // 프로퍼티 동적 생성
  person.address = 'Seoul';
  
  console.log(person); // {name: "Kim", address: "Seoul"}