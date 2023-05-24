// 객체
// key - value pair
//하나의 변수에 여러개의 값을 넣을 수 있다!

// 객체 생성 방법
/// 기본적인 객체 생성 방법
// let person = {
//     name: "홍길동",
//     age: 30,
//     gender: "남자",
// };




///생성자 함수를 이용한 객체 생성 방법
// function Person(name, age, gernder) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
// }

// let person1 = new Person("홍길동", 30, "남자");
// let person2 = new Person("홍길서", 20, "여자");

// //아직은 그냥 이런게 있다 알고넘어가는 정도
// //아직 배운 적 없음
// //이렇게 생성자 함수를 이용하면 굉장히 많은 객체를 한꺼번에 여러개 생성할 수 있다!!



// //접근하는 방법
// //ㄴ console.log(변수명.속성); (구분자를 넣을 수도 있다)
// console.log(person.name);

// console.log('1', person.name);
// console.log('2', person.age);
// console.log('3', person.gender);

// 객체 메소드(객체가 가진 여러가지 기능: Object.~~~)
// Object.key() : key를 가져오는 메소드

let person = {
    name: "홍길동",
    age: 30,
    gender: "남자",
};

let keys = Object.keys(person);
console.log('keys => ', keys);





// values
let values = Object.values(person);
console.log("values => ", values);




//entries
//key와 value를 묶어서 배열로 만든 배열! (2차원 배열)

let entries = Object.entries(person);
console.log("entries => ", entries);





//assingn
// 객체 복사
let newPerson = {};
Object.assign(newPerson, person, {age: 31}, {gender: "여자"});
//()안에 바꾸고싶은 항목만 {}써서 수정 반영할 수 있다.
console.log("newPerson => ", newPerson);


//객체 비교
//크기가 상당히 크다! : 메모리에 저장할 때 별도의 공간에 저장
//person1에 별도 공간에 대한 주소?
let person1 = {
    name: "홍길동",
    age: 30,
    gender: "남자",
};
//person2에 별도 공간에 대한 주소?
let person2 = {
    name: "홍길동",
    age: 30,
    gender: "남자",
};

console.log("answer => ", person1 === person2);

let str1 = "aaa";
let str2 = "aaa";
console.log("answer2 => ", str1 === str2);

//배열을 문자화시킨다
console.log(JSON.stringify(person1) === JSON.stringify(person2));

console.log("----------");
//객체 병합 (...): spread operator
//{}를 없애고 그 안에 있는 것을 모두 해체해줘
let perfectMan = {...person1, ...person2};
console.log(perfectMan);
