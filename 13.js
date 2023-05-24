//조건부 실행 and(&&)
// && 앞의 조건을 만족하면 && 뒤를 실행해줘

// 이전
// let x = 10;
// if (X > 0) {
//     console.log("x는 양수입니다.");
// }

//조건부 실행
let x = 10;
(x > 0) && console.log("x는 양수입니다.");



// 삼항 연산자와 단축평가
// or조건(||)
let y;  // y에는 undefined
let z = y || 20;
//ㄴ 'y가 undefined라면 20을 기본값으로 설정해줘.'라는 뜻 
// ||의 우측값을 기본값으로.
console.log(z);

