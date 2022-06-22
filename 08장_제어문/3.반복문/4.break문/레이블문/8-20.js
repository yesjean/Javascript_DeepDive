//레이블 문은 프로그램의 실행 순서를 제어하는데 사용함. switch문의 case문과 default문도 레이블 문이다.
//탈출 -> break문에 식별자를 지정해줌

// foo라는 식별자가 붙은 레이블 블록문
foo: {
    console.log(1);
    break foo; // foo 레이블 블록문을 탈출한다.
    console.log(2);
  }
  
  console.log('Done!');