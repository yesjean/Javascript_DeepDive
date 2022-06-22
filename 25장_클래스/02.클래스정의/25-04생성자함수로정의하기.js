//비교해보기 - 생성자 함수로 정의하기

var Person = ( function (){
    //생성자 함수
    function Person(name){
        this.name = name;
    }
    //프로토타입 메서드
    Person.prototype.sayHi = function (){
        console.log('hi my name is '+this.name);
    };
    //정적 메서드
    Person.sayHello = function (){
        console.log('hello');
    };
    //생성자 함수 반환
    return Person;
}());