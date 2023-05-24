//스코프, 전역변수, 지역변수, 화살표함수
//여기의 x는 안에 있기 때문에 지역변수에 해당

function printX() {
    let x = 10;
    console.log(x);
}
//여기엔 x가 정의되지 않았기 때문에 오류가 날 것임
// console.log(x);
// printX();

