// 조건문의 중첩
let age = 20;
let gender = "여성";

// 미성년자 구분
if (age >= 18) {
    console.log("성인입니다.");
} else {
    console.log("미성년입니다.");
}

console.log("-----------");

//미성년 + 성인구분
if (age >= 18) {
    // console.log("성인입니다.");
    if (gender === "여성") {
        console.log("성인 여성입니다.");
    } else {
        console.log("성인 남성입니다.");
    }
} else {
    // console.log("미성년입니다.");
    if (gender === "여성") {
        console.log("미성년 여성입니다.");
    } else {
        console.log("미성년 남성입니다.");

    }
}

//중첩문은 중첩이 많고 길수록 가독성이 떨어져 별로이지만, 사용할 수 있어야 한다.
