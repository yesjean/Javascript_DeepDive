// 더 나은 화살표 함수 사용 
// filter는 배열에서 특정 요소를 제거하기위해 사용가능

class Users {
    constructor() {
      this.users = [
        { id: 1, name: 'Lee' },
        { id: 2, name: 'Kim' }
      ];
    }
  
    // 요소 추출
    findById(id) {
      // id가 일치하는 사용자만 반환한다.
      return this.users.filter(user => user.id === id);
    }
  
    // 요소 제거
    remove(id) {
      // id가 일치하지 않는 사용자를 제거한다.
      this.users = this.users.filter(user => user.id !== id);
    }
  }
  
  const users = new Users();
  
  let user = users.findById(1);
  console.log(user); // [{ id: 1, name: 'Lee' }]
  
  // id가 1인 사용자를 제거한다.
  users.remove(1);
  
  user = users.findById(1);
  console.log(user); // []


// filter는 중복요소가 모두 제거됨.
// 하나만 제거 하려면 indexOf로 특정 인덱스를 취한다음 splice 메서드를 사용.