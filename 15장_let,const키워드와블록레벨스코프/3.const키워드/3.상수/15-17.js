//const로 선언한 변수에 원시 값을 할당한 경우 변수값 변경 불가. 
//이러한 특징으로 상수를 표현하는데 사용하기도함.
//상수 : 재할당이 금지된 변수

// 세전 가격
let preTaxPrice = 100;

// 세후 가격
// 0.1의 의미를 명확히 알기 어렵기 때문에 가독성이 좋지 않다.
let afterTaxPrice = preTaxPrice + (preTaxPrice * 0.1);

console.log(afterTaxPrice); // 110