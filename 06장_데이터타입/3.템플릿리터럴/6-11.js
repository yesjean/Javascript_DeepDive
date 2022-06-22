//템플릿 리터럴 내에서는 이스케이프 시퀀스를 사용하지 않아도 줄바꿈 허용, 모든 공백도 있는 그대로 적용된다.

var template = `<ul>
  <li><a href="#">Home</a></li>
</ul>`;

console.log(template);
/*
<ul>
  <li><a href="#">Home</a></li>
</ul>
*/