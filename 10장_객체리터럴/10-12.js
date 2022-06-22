//프로퍼티에 접근하기

var person ={
    name: 'Lee'
};

//마침표 표기법에 의한 접근
console.log(person.name);   //Lee

//대괄호 표기법에 의한 접근 : 반드시 따옴표로 감싼 문자열이어야 함. 감싸지 않으면 식별자로 해석한다.
console.log(person['name']);    //Lee
console.log(person[name]);  //ReferenceError: name is not defined 

//객체에 존재하지 않는 프로퍼티에 접근하면 undefined를 반환함.
console.log(person.age);