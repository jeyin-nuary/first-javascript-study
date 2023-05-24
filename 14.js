//falsy한 값, truthy한 값

if (0) {
    console.log("hello");
}

if ("") {
    console.log("hello");
}

if (null) {
    console.log("hello");
}

if (undefined) {
    console.log("hello");
}

if (NaN) {
    console.log("hello");
}

if (false) {
    console.log("hello");
}

if (true) {
    console.log("hello");
} // hello 한번만 도출됨

//맨마지막엔 무조건 실행되어 값이 나오도록 true조건을 삽입
//값이 한번만 도출된다는 것 = 다른 모든 값은 전부 falsy한 값이라는 뜻

