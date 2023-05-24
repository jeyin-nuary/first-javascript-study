let str = "Hello World!";
// console.log(str);
// console.log(typeof str);


// 문자열 길이 확인하기
console.log(str.length);

//문자열 결합하기(concatenation)
let str1 = "Hello, ";
let str2 = "World!";
let result = str1.concat(str2);
//console.log(result);

//문자열 자르기 (substring)
let str3 = "Hello, World!";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
// console.log(str3.substr(7,5));
// console.log(str3.slice(7,12));


//문자열 검색 (search)
let str4 = "Hello, World";
console.log(str4.search("World"));

//문자열 대체 (replace)
let str5 = "Hello, World!";
let result01 = str5.replace("World", "JavaScript");
console.log(result01);

//문자열 분할 (split)
let str6 = "apple, banana, kiwi";
let result02 = str6.split(",");
console.log(result02);
