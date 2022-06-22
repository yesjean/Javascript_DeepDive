//break문 : 레이블문, 반복문, switch문의 코드 블록을 탈출한다. <- 외에 사용하면 문법에러(SyntaxError)가 발생한다.

if (true) {
    break; // Uncaught SyntaxError: Illegal break statement
  }