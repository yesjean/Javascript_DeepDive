//do~while문은 코드 블록을 먼저 실행하고 조건식을 평가함. ==> 코드블록은 무조건 한 번 이상 실행된다.

var count = 0;

//count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다
do {
    console.log(count); //0 1 2
    count++;
}while(count < 3);