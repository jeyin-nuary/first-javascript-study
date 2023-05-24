// 연산자 (+ - * / %)

// 더하기 연산자
//우선순위가 문자에게 있음
// console.log(1 + 1);   //2
// console.log(1 + "1"); //11

// // 빼기 연산자
// //우선순위가 숫자에게 있다
// console.log(1 - "2"); //-1
// console.log(1 - 2); //-1

// // 곱하기 연산자 *
// console.log(2 * 3); //6
// console.log("2" * 3); //6

// // 나누기 연산자 /
// console.log(4 / 2); //2
// console.log("4" / 2); //2

// // 나누기 연산자 / vs 나머지 연산자 %
// console.log(5 / 2); //2.5
// console.log(5 % 2); //1

//할당 연산자 (assignment)
//등호 연산자 =
// let x = 10;
// console.log(x);

// //더하기 등호 연산자 +=
// x += 5;
// console.log(x);

// // x += 10;
// // console.log(x); 이렇게하니까 25가 나옴

// x += 5;
// console.log(x);

// // 빼기 등호 연산자 -=
// x -= 5;
// console.log(x);

// //여기서 x를 -10으로!
// // x -=20;
// x = x -20;
// console.log(x);

let a = 10;
a *= 2;

console.log(a);

//비교 연산자: 비중높고 중요
//ㄴ> true 또는 false를 반환하는 연산자
// 일치 연산자(===)
//타입까지 일치해야 true를 반환하는 연산자

//숫자 2가 숫자 2랑 같니? 응!
console.log(2 === 2); //true
console.log("2" === 2); //false
console.log(2 === "2"); //false

//불일치 연산자 (!==)
//타입까지 일치해야 false를 반환하는 연산자

console.log(2 !== 2); //false
console.log("2" !== 2); // true
console.log(2 !== "2"); // true

// 작다 연산자 <
console.log("-----");
console.log(2 < 3); // true
console.log(2 < 3); //true

//작거나 같다 연산자 <=
console.log(2 <= 3); // true
console.log(2 <= 3); //true

//논리 연산자
//논리곱 연산자: 둘다 true일때만 true
console.log("-----");
console.log(true && true); // true
console.log(true && false); // false

//논리합 연산자: 두 값 중 하나라도 true인 경우 true 반환
// | 이 키는 엔터위 키를 shift와 함께 누르면 된다
console.log("------");
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

//논리부정 연산자(!): 값을 반대로 바꿈
console.log("-----");
console.log(!true);
console.log(1 === 1);

let b = true;
console.log(b); //true
console.log(!b); //false

//삼황 연산자(중요!)
//조건에 따라 값을 선택한다.
//true면 앞의 값을, false면 뒤의 값을 출력함

let x = 10;
let result = x > 5 ? "크다" : "작다";
console.log("------");
console.log(result);

console.log("---");

let y = 20;
//삼항 연산자를 이용해서 y가 10보다 작은 경우 작다를
//console.log를 이용해서 출력
//10보다 크다면 크다를 출력

let answer = y < 10 ? "작다" : "크다";
console.log(answer);

//타입 연산자(typeof)
console.log(typeof "5");

