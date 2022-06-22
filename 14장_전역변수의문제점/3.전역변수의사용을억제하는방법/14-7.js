//전역변수의 사용을 억제할 수 있는 방법
//3. 모듈 패턴
// 클래스를 모방해서 관련있는 변수와 함수를 모아 즉시 실행 함수로 감싸 하나의 모듈을 만든다. 
// 모듈 패턴은 클로저 기반으로 동작한다. 
// 특징은 전역 변수의 억제는 물론 캡슐화까지 구현 가능
// 캡슐화 : 객체의 상태를 나타내는 프로퍼티와 프로퍼티를 참조하고 조작할 수 있는 동작인 메서드를 하나로 묶는것
// 캡슐화는 객체의 특정 프로퍼티나 메서드를 감출 목적으로 사용하기도함 ==> 정보은닉
// 객체지향 프로그래밍 언어 : public, private, protected 

var Counter = (function () {
    // private 변수
    var num = 0;
  
    // 외부로 공개할 데이터나 메서드를 프로퍼티로 추가한 객체를 반환한다.
    return {
      increase() {
        return ++num;
      },
      decrease() {
        return --num;
      }
    };
  }());
  
  // private 변수는 외부로 노출되지 않는다.
  console.log(Counter.num); // undefined
  
  console.log(Counter.increase()); // 1
  console.log(Counter.increase()); // 2
  console.log(Counter.decrease()); // 1
  console.log(Counter.decrease()); // 0


  //4. ES6 모듈
//<script type="module" src="lib.mjs"></script>
//<script type="module" src="app.mjs"></script>