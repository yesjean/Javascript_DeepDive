//function 생성자 함수

var add = new Function('x', 'y', 'return x + y');

console.log(add(2, 5)); // 7