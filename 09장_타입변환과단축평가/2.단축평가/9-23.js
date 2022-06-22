//단축평가의 유용한 사용
//1. 객체를 가리키기를 기대하는 변수가 null또는 undefined가 아닌지 확인하고 프로퍼티를 참조할 때 
//  - null 또는 undefined인 경우 객체의 프로퍼티를 참조하면 타입에러가 발생함. 

var elem = null;
var value = elem.value; //TypeError: Cannot read property 'value' of null

//단축평가를 사용하면 에러가 나지 않음
var elem = null;
// elem이 null이나 undefined와 같은 Falsy 값이면 elem으로 평가되고
// elem이 Truthy 값이면 elem.value로 평가된다.
var value = elem && elem.value; // -> null

