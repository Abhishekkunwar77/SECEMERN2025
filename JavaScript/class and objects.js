// class and objects in javascript
class ClassExample{
    constructor(){
          this.a=10 
    }
    funInClass=()=>{
        console.log(this.a)
    }
}
obj= new ClassExample()
console.log(obj.a)
console.log(obj.funInClass())
// ternary opeators
let a=prompt("Enter a number to check for even or odd: ")
a=Number.parseInt(a)
console.log((a%2==0)?" Entered number is Even":" Entered number is Odd")


//spread operator
a=[10,20,30,40]
b=[50,60,70]
c=[...b,...a]
console.log(c)

// rest operator
function restEx(a,b,c,d,...arg){
    console.log(arg)
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
}
restEx(10,20,30,40,50)
// destructing operators
// destructing operator
var array=[10,20,30]
 var [a,b,c,d]=array
 console.log(a,b,c,d)   

 // hoisting , it  is embedded with scope concepts
 // variable hoisting
// console.log(a)
// var a=10;
// console.log(a)
console.log(a) //error cannot be accessed before the initialization
const a=10; 
console.log(a)
//function hoisting
console.log(fun())

function fun(){
    return 10
}
