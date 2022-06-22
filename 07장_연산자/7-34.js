//지수 연산자 : 거듭제곱  = Math.pow 메서드

2 ** 2;   // -> 4
2 ** 2.5; // -> 5.65685424949238
2 ** 0;   // -> 1
2 ** -2;  // -> 0.25

Math.pow(2, 2);   // -> 4
Math.pow(2, 2.5); // -> 5.65685424949238
Math.pow(2, 0);   // -> 1
Math.pow(2, -2);  // -> 0.25

//지수연산자가 Math.pow메서드 보다 가독성 좋음 
2 ** (3 ** 2); // -> 512
Math.pow(2, Math.pow(3, 2)); // -> 512

//음수를 거듭제곱의 밑으로 사용하려면 괄호로 묶어야함 
//-5 ** 2;
// SyntaxError: Unary operator used immediately before exponentiation expression.
// Parenthesis must be used to disambiguate operator precedence

(-5) ** 2; // -> 25

//할당 연산자와 함께 사용가능
var num = 5;
num **= 2;  //25

//지수 연산자는 이항 연산자 중에서 우선순위가 가장 높다 
