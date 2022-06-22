//전역객체는 전역코드가 평가되기 이전에 생성된다. 
//전역객체도 Object.prototype을 상속받음. 프로포타입 체인의 일원이다. 

// Object.prototype.toString
window.toString(); // -> "[object Window]"

window.__proto__.__proto__.__proto__.__proto__ === Object.prototype; // -> true