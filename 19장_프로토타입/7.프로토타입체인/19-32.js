
// hasOwnProperty는 Object.prototype의 메서드다.
// me 객체는 프로토타입 체인을 따라 hasOwnProperty 메서드를 검색하여 사용한다.
me.hasOwnProperty('name'); // -> true

/*
프로토타입 체인 : 객체의 프로퍼티(메서드 포함)에 접근하려고 할 때 해당 객체에 접근하려는 프로퍼티가 없다면 [[Prototype]] 내부 슬롯의 참조를 따라
            자신의 부모 역할을 하는 프로토타입의 프로퍼티를 순차적으로 검색함.

프로토타입 체인의 최상위에 위치하는 객체는 언제나 Object.prototype. 따라서 모든 객체는 Object.prototype을 상속받음
Object.prototype ==> 체인의 종점
체인의 종점에서도 프로퍼티를 검색할 수 없는 경우 undefined를 반환. 에러 발생하지 X 

자바스크립트 엔진은 객체 간의 상속관계로 이루어진 프로토타입의 계층적인 구조에서 객체의 프로퍼티를 검색함.
 == 프로토타입 체인은 상속과 프로퍼티 검색을 위한 메커니즘

프로퍼티가 아닌 식별자는 스코프 체인에서 검색. 
 == 스코프 체인은 식별자 검색을 위한 메커니즘.

스코프 체인과 프로토타입 체인은 서로 협력하여 식별자와 프로퍼티를 검색하는데 사용됨.
*/