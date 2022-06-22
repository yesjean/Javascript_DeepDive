// slice가 복사본을 생성하는 것을 이용하여 arfuments, HTMLCollection, NodeList 같은
// 유사 배열 객체를 배열로 변환할 수 있음.

function sum() {
    // 유사 배열 객체를 배열로 변환(ES5)
    var arr = Array.prototype.slice.call(arguments);
    console.log(arr); // [1, 2, 3]
  
    return arr.reduce(function (pre, cur) {
      return pre + cur;
    }, 0);
  }
  
  console.log(sum(1, 2, 3)); // 6