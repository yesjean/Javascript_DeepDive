//arguments 객체는 배열이 아니기때문에 Array.prototype.slice 같은 배열의 메서드를 사용할 수 없으나
//apply와 call을 이용하면 가능하다. 

function convertArgsToArray() {
    console.log(arguments);
  
    // arguments 객체를 배열로 변환
    // Array.prototype.slice를 인수없이 호출하면 배열의 복사본을 생성한다.
    const arr = Array.prototype.slice.call(arguments);
    // const arr = Array.prototype.slice.apply(arguments);
    console.log(arr);
  
    return arr;
  }
  
  convertArgsToArray(1, 2, 3); // [1, 2, 3]