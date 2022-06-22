//if~else문 삼항 조건 연산자로 바꿔쓰기

//x가 짝수이면 result에 짝수를 할당, 홀수면 홀수를 할당

var x = 2;
var result;

if(x % 2){  //2 % 2 = 0  이때 0은 false로 강제 변환된다. 
    result = '홀수';
}else {
    result = '짝수';
}

console.log(result);    //짝수



//삼항 조건 연산자로 바꿔쓰기

var x = 2;

// 0은 false로 취급된다.    true : 1 / flase : 0 
var result = x % 2 ? '홀수' : '짝수';
console.log(result); // 짝수


//경우의 수가 세 가지 인경우 
var num = 2;

// 0은 false로 취급된다.
var kind = num ? (num > 0 ? '양수' : '음수') : '영';

console.log(kind); // 양수
