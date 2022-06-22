// forEach문은 break, continue문 사용 불가. 
// 배열의 모든 요소를 빠짐없이 모두 순회하고 중간에 중단 불가

[1, 2, 3].forEach(item => {
    console.log(item);
    if (item > 1); 
    //break; 
    // SyntaxError: Illegal break statement
  });
  
  [1, 2, 3].forEach(item => {
    console.log(item);
    if (item > 1); 
    //continue;
    // SyntaxError: Illegal continue statement: no surrounding iteration statement
  });