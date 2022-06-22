//일반 함수와 생성자 함수는 특별한 형식적 차이가 없다.
//new 연산자와 함께 함수를 호출하면 해당 함수는 생성자 함수로 동작하고 [[Construct]]가 호출된다.
//단 new연산자와 함께 호출하는 함수는 non-constructor가 아닌 constructor이어야 한다.


// 생성자 함수로서 정의하지 않은 일반 함수
function add(x, y) {
    return x + y;
  }
  
  // 생성자 함수로서 정의하지 않은 일반 함수를 new 연산자와 함께 호출
  let inst = new add();
  // 함수가 객체를 반환하지 않았으므로 반환문이 무시된다. 따라서 빈 객체가 생성되어 반환된다.
  console.log(inst); // {}
  
  // 객체를 반환하는 일반 함수
  function createUser(name, role) {
    return { name, role };
  }
  
  // 생성자 함수로서 정의하지 않은 일반 함수를 new 연산자와 함께 호출
  inst = new createUser('Lee', 'admin');
  // 함수가 생성한 객체를 반환한다.
  console.log(inst); // {name: "Lee", role: "admin"}