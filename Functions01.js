//// 7)Currying

// 1)
// function add1(a){
//     return function(b){
//         return function(c){
//             console.log(a+b+c)
//         }
//     }
// }
// add1(5)(2)(3)

// 2)
// function multiply1(A){
//     return function(B){
//         return function(C){
//             console.log(A*B*C)
//         }
//     }
// }
// multiply1(2)(5)(8)



////   8)IIFE

// 1)

(function(){
    console.log("Website Loaded")
})();

// 2)
(function(){
    let price=1000;
    let discount=10
    let final=price-(price*discount/100)
    console.log(final)
})()




///// 9)Generator Function
// 1)
function*coupon(){
    yield"100ff"
    yield"200ff"
    yield"300ff"
}
let x=coupon();
console.log(x.next().value)
console.log(x.next().value)
console.log(x.next().value)

// 2)
function*messages(){
    yield"Keep coding"
    yield"Never Give Up"
    yield"Learn JS"
}
let Y=messages()
console.log(Y.next().value)
console.log(Y.next().value)
console.log(Y.next().value)
console.clear()



///// 10) Spread operator
// 1)
let array1=[1,2,3]
let array2=[4,5,6]
console.log([...array1,...array2]);

// 2)
let M=[10,20,30]
let N=[...M]
console.log(N)

// 3)
let object={...{name1:"John"},...{role:"Developer"}}
console.log(object)
console.clear()



///// 11)Rest Operator

// 1)
function sumAll(...numbers){
    let sum=0;
    for(let n of numbers){
        sum=sum+n
    }
    console.log(sum)
}
sumAll(10,20,30)

// 2)
function show(first,...Rest){
    console.log(first)
    console.log(Rest)
}
show(1,2,3,4,5)

// 3)
function bill(...prices){
    let total=0
    for(let i of prices){
        total=total+i
    }
    console.log(total)
}
bill(100,200,300)


////12)Destructuring
// 1)
let [a,b,c,d]=[10,20,30,40]
console.log(a,b,c,d)

// 2)
let {name,role,salary}={name:"Naveen",role:"Developer",salary:"40000"}
console.log(name,role,salary)

// 3)
let[first,,,last]=[10,20,30,40]
console.log(first,last)

// 4)
let [C,A,[O,P]]=[1,2,[3,4]];
console.log(C,A,O,P)

console.clear()


/////13))Array Manipulation
// 1)

let Array3=[1,2,3,4,5]
Array3.push(6)
console.log(Array3)

let Array4=[1,2,3,4,5]
Array4.pop()
console.log(Array4)

let Array5=[1,2,3,4,5]
Array5.shift()
console.log(Array5)

let Array6=[1,2,3,4,5]
Array6.unshift()
console.log(Array6)
console.clear()

// 2)

let arr=[1,2,3,40,50,6]
arr.splice(3,2,4,5)
console.log(arr)