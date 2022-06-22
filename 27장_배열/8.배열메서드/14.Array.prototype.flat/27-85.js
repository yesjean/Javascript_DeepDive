// Array.prototype.flat 
// ES10에서 도입. 인수로 전달한 깊이 만큼 재귀적으로 배열을 평탄화한다.

[1, [2, 3, 4, 5]].flat(); // -> [1, 2, 3, 4, 5]


// 중첩 배열을 평탄화할 깊이를 인수로 전달할 수 있다.
// 인수를 생략할 경우 기본값은 1
// Infinity를 전달하면 중첩배열 모두를 평탄화 한다.
// 중첩 배열을 평탄화하기 위한 깊이 값의 기본값은 1이다.
[1, [2, [3, [4]]]].flat();  // -> [1, 2, [3, [4]]]
[1, [2, [3, [4]]]].flat(1); // -> [1, 2, [3, [4]]]

// 중첩 배열을 평탄화하기 위한 깊이 값을 2로 지정하여 2단계 깊이까지 평탄화한다.
[1, [2, [3, [4]]]].flat(2); // -> [1, 2, 3, [4]]
// 2번 평탄화한 것과 동일하다.
[1, [2, [3, [4]]]].flat().flat(); // -> [1, 2, 3, [4]]

// 중첩 배열을 평탄화하기 위한 깊이 값을 Infinity로 지정하여 중첩 배열 모두를 평탄화한다.
[1, [2, [3, [4]]]].flat(Infinity); // -> [1, 2, 3, 4]