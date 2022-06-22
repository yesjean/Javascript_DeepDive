//for~in 문은 프로퍼티를 열거할 때 순서를 보장하지 않음. 
//하지만 대부분의 모던 브라우저는 순서를 보장하고 숫자인 프로퍼티 키에 대해서는 정렬을 실시한다. 


const obj = {
    2: 2,
    3: 3,
    1: 1,
    b: 'b',
    a: 'a'
  };
  
  for (const key in obj) {
    if (!obj.hasOwnProperty(key)) continue;
    console.log(key + ': ' + obj[key]);
  }
  
  /*
  1: 1
  2: 2
  3: 3
  b: b
  a: a
  */