//math module

export function add(a,b) {
  return a+b;
}

export function sub(a,b){
  return a-b;
}

export default function multiply(a,b){
  return a*b;
}

//export{add, sub}; //es module

// module.exports = { //common JS 방식 
//   add : add, //key값과 value값이 같으면 하나만 써도 됨
//   sub : sub,
// };