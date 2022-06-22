//이중 for문

//두 개의 주사위를 던졌을 때 두 눈의 합이 6이되는 모든 경우의 수 출력 
for (var i = 1; i <= 6; i++) {
    for (var j = 1; j <= 6; j++) {
      if (i + j === 6) console.log(`[${i}, ${j}]`);
    }
  }