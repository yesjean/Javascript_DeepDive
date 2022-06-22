//객체지향 프로그래밍 : 프로그램을 여러 개의 독립적인 단위, 즉 객체의 집합으로 프로그램을 표현하려는 프로그래밍 패러다임을 말함.
//추상화 : 다양한 속성 중에서 프로그램에 필요한 속성만 간추려 내어 표현하는 것 
//객체 : 속성을 통해 여러 개의 값을 하나의 단위로 구성한 복합적인 자료구조 



// 이름과 주소 속성을 갖는 객체
const person = {
    name: 'Lee',
    address: 'Seoul'
};

console.log(person); // {name: "Lee", address: "Seoul"}


//객체지향 프로그래밍은 객체의 상태를 나타내는 데이터와 상태 데이터를 조작할 수 있는 동작을 하나의 논리적인 단위로 묶어 생각한다.
//객체는 상태 데이터와 동작을 하나의 논리적인 단위로 묶는 복합적인 자료구조이다. 
//이때 객체의 상태를 프로퍼티, 동작을 메서드라 함. 

const circle = {
    radius: 5, // 반지름

    // 원의 지름: 2r
    getDiameter() {
        return 2 * this.radius;
    },

    // 원의 둘레: 2πr
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    },

    // 원의 넓이: πrr
    getArea() {
        return Math.PI * this.radius ** 2;
    }
};

console.log(circle);
// {radius: 5, getDiameter: ƒ, getPerimeter: ƒ, getArea: ƒ}

console.log(circle.getDiameter());  // 10
console.log(circle.getPerimeter()); // 31.41592653589793
console.log(circle.getArea());      // 78.53981633974483