// Array.from을 이용하면 더욱 간단하게 유사 배열 객체를 배열로 변환 가능

function sum() {
    const arr = Array.from(arguments);
    console.log(arr); // [1, 2, 3]
  
    return arr.reduce((pre, cur) => pre + cur, 0);
  }
  
  console.log(sum(1, 2, 3)); // 6