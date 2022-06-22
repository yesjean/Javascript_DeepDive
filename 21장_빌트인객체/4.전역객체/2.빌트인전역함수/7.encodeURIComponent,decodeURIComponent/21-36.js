/*
endoceURIComponent : URI 구성요소를 전달받아 인코딩 한다. 
                    인수로 전달된 문자열을 URI의 구성요소인 쿼리스트링의 일부로 간주함. 쿼리스트링 구분자로 사용하는 = ? & 까지 인코딩함.
                * encodeURI 는 매개변수로 전달된 문자열을 완전한 URI 전체로 간주해서 쿼리스트링 구분자 인코딩 X 
인코딩 : URI의 문자들을 이스케이프 처리하는 것을 의미함.  알파벳, 0~9의숫자, -_.!~*() 문자는 이스케이프 처리 제외.
decodeURIComponent : 매개변수로 전달된 URI 구성요소를 디코딩함. 
*/



// URI의 쿼리 스트링
const uriComp = 'name=이웅모&job=programmer&teacher';

// encodeURIComponent 함수는 인수로 전달받은 문자열을 URI의 구성요소인 쿼리 스트링의 일부로 간주한다.
// 따라서 쿼리 스트링 구분자로 사용되는 =, ?, &까지 인코딩한다.
let enc = encodeURIComponent(uriComp);
console.log(enc);
// name%3D%EC%9D%B4%EC%9B%85%EB%AA%A8%26job%3Dprogrammer%26teacher

let dec = decodeURIComponent(enc);
console.log(dec);
// 이웅모&job=programmer&teacher

// encodeURI 함수는 인수로 전달받은 문자열을 완전한 URI로 간주한다.
// 따라서 쿼리 스트링 구분자로 사용되는 =, ?, &를 인코딩하지 않는다.
enc = encodeURI(uriComp);
console.log(enc);
// name=%EC%9D%B4%EC%9B%85%EB%AA%A8&job=programmer&teacher

dec = decodeURI(enc);
console.log(dec);
// name=이웅모&job=programmer&teacher