//네이밍 컨벤션 : 하나 이상의 영어단어로 구성된 식별자를 만들 때 가독성 좋게 단어를 한눈에 구분하기 위해 규정한 명명규칙 


// 카멜 케이스 (camelCase)  -> 일반적으로 변수나 함수에 많이 사용됨 
var firstName;

// 스네이크 케이스 (snake_case)
var first_name;

// 파스칼 케이스 (PascalCase)   -> 생성자 함수, 클래스 이름 
var FirstName;

// 헝가리언 케이스 (typeHungarianCase)
var strFirstName; // type + identifier
var $elem = document.getElementById('myId'); // DOM 노드
var observable$ = fromEvent(document, 'click'); // RxJS 옵저버블