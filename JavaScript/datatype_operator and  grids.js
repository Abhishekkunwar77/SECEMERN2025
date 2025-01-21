 a="sece"
 console.log(a)
 b=true
console.log(b)
 console.log(typeof(a))
 console.log(typeof(b))
 array=['a',10,true,[20,20],"srieshwar"]
 console.log(array)
 console.log(typeof(array))
 obj={
    firstname:"Sri",
    lastname:"eshwar"
}
 console.log(obj)
 console.log(typeof(obj))
 console.log(obj.firstname)
 console.log(obj["lastname"])
 obj1={}
console.log(obj1)
obj1["dept"]="cse"
 obj1["sec"]="a"
 console.log(obj1)
 
 obj2=new Object()
 console.log(obj2)
 obj2.count=70
 obj2.abs=1    
 totalPresentCount=obj2.count - obj2.abs
 console.log( "present",totalPresentCount)
console.log(obj2)
set =new Set(["hello",1,2,'sece'])
console.log(typeof(set))
console.log(set)

// //logical operator
// var a=5
// var b="5"
// console.log(a===b)
// console.log(a==b)
//bitwise operator(&,^,|,~,<<,>>)
// var c=10
// var d=2
// console.log(~c)
// console.log(c&d)
// console.log(c|d)
// console.log(c>>2)
// console.log(d<<2)
// console.log(c^d)
  

var a=10
let b=20
const pi=3.14
console.log(a)
console.log(b)
console.log(pi)
pi=3.143
console.log(pi)

async function asAw()
{
    setTimeout(()=>{
        return ("inside timeout")
    },5000)
return "this is async/await example"
}
asAw().then(function(output)
{
console.log(output)
})  

// function submitForm(submit,db)
// {
//    console.log( db());
// console.log(submit)
// }
// function database()
// {
// dbname="SECE"
// return [dbname,"data stored successfully"]  
// }
// submitForm("form validated succesfully",database)
function submitForm(submit,isFormValid) //main function
{
if(isFormValid)
{
    console.log("Fiels validated successfully")
    console.log(submit)
}
else{
    console.log("Fiels validated failed")
    console.log("Form submission unsuccessful")
}
}
function formValidation() //callback function
{
email="sece@sece.ac.in"
password="12345678"
if (email==="sece@sece.ac.in" && password)
{
    return true
}
else{
    return false
}
}
submitForm("Form submitted successfully",formValidation)

// //ES6 ECMA script standard 6
// //1.variable declarations ->refer variables.js
// //2.scope
// //->var-
// // ->let-local/block scope
// // ->const-global scope
// var a=20
// const con=3.14
// console.log(a)
// console.log(con)
// {
//     var a=20
//     let b=30
//     console.log(a)
//     console.log(b)
// }
// console.log(a)
// console.log(con)
// console.log(b)
//class and object
// class ClassEg
// {
//     constructor()
//     {
//     this.a=10
// }
//arrow functions
// funInclass = ()=>
// {
//     console.log(this.a)
// }
// }
// obj=new ClassEg()
// console.log(obj.a)
// console.log(obj.funInclass())
//5.ternary operator(?,:)
// a=10
// console.log((a%2==0)?"even":"odd")
//6/spread operator
// a=[10,20,30,40]
//  b=[50,60,70]
// c=[...b,...a]
// console.log(c)
//7.rest operator[...]
// function restOpeg(a,b,...arg)
//     {
//         console.log(a)
//         console.log(b)
//     console.log(arg)
//     }
//     b=[50,60,70]
//     restOpeg(10,20,30,40,50,...b)
//destructing operator
// var array=[10,20,30]
// var [a,b,c,d]=array
// console.log(a,b,c,d)
//Hoisting operator
//varible hoisting
// console.log(a)
// const a=10
//function hoisting
console.log(fun())
function fun()
{
    return 10
}
function fun()
{
    return 20

//with arg with return type
function SECE(dept){
    console.log("the dept is",dept)
    return "Section of the dept is A"
}
console.log(SECE("cse"))
//with arg without return type
function sece(dept)
{
    console.log("the dept is",dept)
}
console.log(sece("cse-A"))
//without arg with return type
function sece()
{
    return "the dept is cse"
}
console.log(sece())
//without arg without return type
function sece()
{
console.log("the dept is cse")
}
console.log(sece())
}