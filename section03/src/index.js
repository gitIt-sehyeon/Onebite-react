// const {add, sub} = require("./math"); //common JS 방식

import mul, {add, sub} from "./math.js"; //es module system
//default 는 중괄호 없이 가져올 수 있음 가져오는 이름도 바꿀 수 있음 multiply => mul

// console.log(add(1,2));
// console.log(sub(1,2));
// console.log(mul(2,3));

import randomColor from "randomcolor"; //패키지 이름 넣으면 됨

const color = randomColor();
console.log(color);


//npm i 를 터미널에 적으면 실수로 삭제된 파일들을 다 가져올 수 있음