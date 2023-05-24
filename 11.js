//문 (if, else if, switch ~~)

//조건문 if, else if, else, switch
//if 문


// if (조건: true 또는 false가 나올 수 있는 조건) {
    //main logic
    //예시 console.log("출력값");
// }



//
let x = 10;

if (x > 0) {
    console.log("x는 양수입니다.");
}

//
console.log("----");

if (x < 0) {
    console.log("x는 양수입니다.");
}

// 조건값이 false라면 내부 로직이 실행되지 않음

// 문제
let y = "hello world";

// y의 길이가 5보다 크거나 같으면 길이를 console.log로 출력

// 내가 한 답
// if (length(y >= 5)) {
//     console.log(length(y));
// }

//올바른 답
if (y.length >= 5) {
    console.log(y.length);
}

//if - else 문
// if () {
//     // main logic #1 (조건에 true인 경우 출력됨)
// } else {
//     // main logic #2 (조건에 false인 경우 출력됨)
// }


let z = 10;

if (z > 0) {
    console.log("z는 양수입니다.");
} else {
    console.log("z는 음수입니다.");
}

let zz = -3;

if (zz > 0) {
    console.log("zz는 양수입니다.");
} else {
    console.log("zz는 음수입니다.");
}

// if -else if - else 문

// if (조건) {
//     // main logic #1
// } else if (조건2) {
//     // main logic #2
// } else {
//     // main logic #3
// }

let xx = 10;

if (xx < 0 ) {
    console.log('1');
} else if (xx >= 0 && xx < 10) {
    console.log('2');
} else {
    console.log('3');
}


//switch
//변수의 값에 따라, 여러 경우(case) 중 하나 선택
// default //변수가 항상 같이 나온다
//결과값 도출 후엔 break를 넣어주어 계속해서 흐르는 것을 막는다


let fruit = "사과";

switch (fruit) {
    case "사과":
        console.log('사과입니다.');
        break;
    case "바나나":
        console.log("바나나입니다.");
        break;
    case "키위":
        console.log("키위입니다.");
        break;
    default:
        console.log("아무것도 아닙니다.");
        break;
}

//switch문 문법

// let a = "경우"

// swtich (a) {
//     case "b":
//         console.log('b');
//         break;
//     case "c":
//         console.log('c');
//         break;
//     case "d":
//         console.log('d');
//         break;
//     default:
//         console.log('none');
//         break;
// }

