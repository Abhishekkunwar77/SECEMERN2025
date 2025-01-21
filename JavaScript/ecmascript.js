// ECMAScript
// ECMAScript is a scripting language standardized by Ecma International. It was created to standardize JavaScript.
// 1. Variable declaration -> refer variables.js
// 2. Scope 
// var
// let
// const

var a = 10;
const con = 3.14;

console.log(a);  // Output: 10
console.log(con);  // Output: 3.14

{
    let a = 20;  // This 'a' is block-scoped and does not affect the outer 'a'
    let b = 30;  // 'b' is also block-scoped
    console.log(a);  // Output: 20
    console.log(b);  // Output: 30
}

console.log(a);  // Output: 10 (Outer 'a' is unaffected by the block)
console.log(con);  // Output: 3.14 (Constant 'con' remains unchanged)
console.log(b) // shows the error it cannnot be accessed outside the block

 