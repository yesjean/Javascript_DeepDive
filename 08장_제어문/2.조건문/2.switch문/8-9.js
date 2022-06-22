//폴스루 : break문을 사용하지 않았을때 switch문이 끝날 때까지 이후의 모든 case문과 default문을 실행하면 -> Invalid month가 출력된다.

//break문을 생략한 폴스루가 유용한 경우 : 여러개의 case 문을 하나의 조건으로 사용할 수 있음. 

//윤년인지 판별해서 2월의 일수를 계산
var year = 2000;
var month = 2;
var days = 0;

switch(month){
    case 1: case 3: case 5: case 7: case 10: case 12:
        days = 31;
        break;
    case 4: case 6: case 9: case 11:
        days = 30;
        break;
    case 2:
        //윤년 계산 알고리즘
        /*
        1. 연도가 4로 나누어떨어지는 해(2000,2004, 2008, 2012, 2016, 2020...)는 윤년임
        2. 연도가 4로 나누어떨어지더라도 연도가 100으로 나누어떨어지는 해(2000, 2200...)는 평년임
        3. 연도가 400으로 나누어떨어지는해(2000, 2400, 2800)는 윤년임.
        */
       days = ((year%4 === 0 && year%100 === 0) || (year%400 === 0)) ? 29 : 28;
       break;
    default:
        console.log('Invalid month');
}
console.log(days);