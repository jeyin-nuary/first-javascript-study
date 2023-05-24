//함수 = function(기능)
// input, output

// function () {}

//함수 선언문
// function add (매개변수) {
//    함수 내부에서 실행할 로직
// }

//  function(=함수) 함수이름 (매개변수) {
//    return(출력) 출력 변수;
// }

function add (x, y) {
    return x + y;
}

//함수 표현식
let add2 = function (x, y) {
    return x + y;
}

//함수 호출=사용
//함수명() -> add(입력값)
console.log(add(2,3));

let functionResult = add(3,4);
console.log(functionResult);

//add2를 가지고 10과 20을 더한 값 출력

console.log("-----");

// function add2(10, 20) {
//      return 10 + 20;
// } 틀린 표현

let functionResult2 = add2(10, 20);
console.log(functionResult2);

//함수의 input: 매개변수(매개체가 되는 변수)
//output: return문 뒤에 오는 반환값!