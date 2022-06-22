

var person1 = {
    name: 'Lee'
  };
  
  var person2 = {
    name: 'Lee'
  };
  
  console.log(person1 === person2); // ①
  console.log(person1.name === person2.name); // ②


  // ① 객체 내용은 같지만 다른 메모리에 저장된 별개의 객체임. 변수의 참조값은 전혀 다른값. false
  // ② true