//화살표 함수 (arrow function)
// ES6 신 문법

//기존의 함수식
function add (x, y) {
    return x + y
}

//간략하게 만든 화살표 함수!
//기본적인 화살표 함수 (arraowFunc)

let arrowFunc01 = (x, y) => {
    return x + y
}

//기본 함수식에 충분히 익숙해지고 나서 화살표함수를 사용하기를 권장

//화살표함수 한줄로
let arraowFunc02 = (x, y) => x + y
//return문을 뺄 수 있음(다만, {}안이 1줄이어야 함. 다른 로직있음 불가능. 쓸 땐 {}도 같이 삭제)


//
function testFunc(x) {
    return x;
}

//화살표함수 한줄로!
let arrowFunc03 = x => x;
//return, {}뿐만 아니라 매개변수가 1개뿐일 시, ()도 제거 가능함


