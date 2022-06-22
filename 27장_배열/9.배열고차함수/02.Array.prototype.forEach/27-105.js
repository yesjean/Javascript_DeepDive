// 희소배열의 경우 존재하지 않는 요소는 순회대상에서 제외된다. 
// map, filter, reduce도 마찬가지

// 희소 배열
const arr = [1, , 3];

// for 문으로 희소 배열을 순회
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // 1, undefined, 3
}

// forEach 메서드는 희소 배열의 존재하지 않는 요소를 순회 대상에서 제외한다.
arr.forEach(v => console.log(v)); // 1, 3


// forEach문은 for문에 비해 성능은 별로지만 가독성이 좋으므로 
// 요소가 엄청 많은 경우나 시간이 많이 걸리는 복잡한 코드 또는 높은 성능을 필요로 하는경우가 아니라면
// forEach 권장