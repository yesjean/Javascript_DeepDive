var num =2;
var kind;

//if문
if(num > 0){
    kind = '양수';  //음수를 구별할 수 없다.
}
console.log(kind);  //양수

//if~else 문
if(num > 0){
    kind = '양수';
}
else {
    kind = '음수';  //0은 음수가 아니다
}
console.log(kind);  //양수

//if~else if 문
if(num > 0){
    kind = '양수';
}
else if(num < 0){
    kind = '음수';
}
else {
    kind = '영';
}
console.log(kind);  //양수


//코드 블록 내의 문이 하나라면 중괄호 생략가능
var num = 2;
var kind;

if (num > 0)      kind = '양수';
else if (num < 0) kind = '음수';
else              kind = '영';

console.log(kind); // 양수
