
//encodeURI 함수 : 완전한 URI를 문자열로 전달받아 이스케이프 처리를 위해 인코딩한다.


// 완전한 URI
const uri = 'http://example.com?name=이웅모&job=programmer&teacher';

// encodeURI 함수는 완전한 URI를 전달받아 이스케이프 처리를 위해 인코딩한다.
const enc = encodeURI(uri);
console.log(enc);
// http://example.com?name=%EC%9D%B4%EC%9B%85%EB%AA%A8&job=programmer&teacher





//decodeURI 함수 : 인코딩된 URI를 인수로 전달받아 이스케이프 처리 전으로 디코딩한다.

const uri2 = 'http://example.com?name=이웅모&job=programmer&teacher';

// encodeURI 함수는 완전한 URI를 전달받아 이스케이프 처리를 위해 인코딩한다.
const enc2 = encodeURI(uri2);
console.log(enc2);
// http://example.com?name=%EC%9D%B4%EC%9B%85%EB%AA%A8&job=programmer&teacher

// decodeURI 함수는 인코딩된 완전한 URI를 전달받아 이스케이프 처리 이전으로 디코딩한다.
const dec2 = decodeURI(enc2);
console.log(dec2);
// http://example.com?name=이웅모&job=programmer&teacher