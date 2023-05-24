//배열 

//생성
//기본 생성 //순서가 있다.
let fruits = ["사과", "바나나", "오렌지"];


//크기 지정
let number = new Array(5);

console.log(number.length); //5
console.log(fruits.length); //3


//요소 접근 (객체는 key로, 배열은 index로)
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);


//배열 메소드
//push : 마지막에 추가하는 녀석
let fruits1 = ["사과", "바나나"];
console.log("1 => ", fruits1);

fruits1.push("자두");
console.log("2 => ", fruits1);


//pop 메소드 : 마지막을 삭제하는 녀석
//삭제하는 애라 ()안에 변수를 지정하지 않음
let fruits2 = ["사과", "바나나"];
console.log("1 => ", fruits2);
fruits2.pop();
console.log("2 => ", fruits2);


//shift 메소드 : 첫번째를 삭제하는 녀석 
//삭제하는 애라 ()안에 변수를 지정하지 않음
console.log("3 => ", fruits1);
fruits1.shift();
console.log("4 => ", fruits1);

//unshift 메소드 : 맨앞에 어떤 걸 추가하는 녀석
fruits1.unshift("포도");
console.log(fruits1);


//splice (인덱스 번호위치부터, 몇개 삭제, 그 자리에 대신 삽입해)
fruits1.splice(1, 1, "포도");
console.log(fruits1);

//slice (인덱스 번호위치부터, 몇번째 전까지)
//딱 잘라낸 부분만 남긴다!
console.log("----------");

let fish = ["참치", "연어", "고등어"];
let slicedFish = fish.slice(1, 3);
console.log(slicedFish);
