//looping in javascript
// normal and advanced looping tecnhiques
//normal looping:
//for 
//whiledo 
//while
//advanced looping:
//for each 
//for in 
//for
var a=[10,20,30]
var b={
   "count":70,
   "abs":1
}

for(let i in a){
console.log(a[i])
}
for(let i in b){
console.log(i,b[i])
}
set = new Set(["hello",1,2])
for(let i of set){
    console.log(i)
}
console.log(set)
var a=[10,20,30]
var b={
   "count":70,
   "abs":1
}
for(let [i,j] of  Object.entries(b)){
    console.log(i,j)
}



