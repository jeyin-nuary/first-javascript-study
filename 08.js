//스코프, 전역변수, 지역변수, 화살표함수

//스코프: 변수의 영향범위
//전역변수: 스코프가 전체영역에서 영향
//지역변수: 함수 내에서만 영향

let x = 10;
//여기 위의 x는 전역변수에 해당

function printX() {
    console.log(x);
}

console.log(x);
printX();
