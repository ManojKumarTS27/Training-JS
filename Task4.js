/////// 1)Functions


// 1)
// function greetUser(name){
//     console.log("Welcome to Stackly."+name)
// }
// greetUser(prompt())
// console.clear()

// 2)
function calculateSalary(basic,bonus){
    return(basic+bonus)
}
let total=calculateSalary(20000,5000)
console.log(total)

// 3)
function checkEvenOdd(num){
if(num%2==0){
    return("Even")
}
else{
    return("Odd")
}
}
console.log(checkEvenOdd(8))

// 4)
function findMax(a,b,c){
    if(a>b && a>c){
        return a;
    }else if(b>a && b>c)
        return b;
    else{
        return c;
    }
}
console.log(findMax("A:"+10,"B:"+40,"C:"+80))

// 5)
function calculateGST(price){
    return(price*0.18)
}
console.log(calculateGST(1000))
console.clear()

// 6)
function Login(username,password){
    if(username==="admin" && password==="1234")
    {
        console.log("Login Successful")
    }
    else{
        console.log("Invalid Username or Password")
    }
}
Login("admin","1234")


///// 2)Default Parameters

// 1)
function createEmployee(name,role="Trainee"){
    console.log("Name:" +name)
    console.log("Role:" +role)
}
createEmployee("Surya")
createEmployee("Rahul")
console.clear()

// 2)
function calculateDiscount(price,discount=10){
   let final=price-(price*discount/100)
   console.log("Final Price:"+final)
}
calculateDiscount(2000)

// 3)
function orderFood(item,quantity=1){
    console.log("Item : " + item)
    console.log("Quantity: " + quantity)
}
orderFood("Idli",4)
orderFood("Dosa",2)
console.clear()




////// 3) Scope

// 1)
let name1="Stackly"
function Scope(){
    console.log(name1)
}
Scope()

// 2)
if(true){
    var a=20;
    let b=40;
    const c=60;
}
console.log(a)
// console.log(b)
// console.log(c)

// 3)
function test(){
    let message="Hi"
     console.log(message)
}
test()
// console.log(message)
console.clear()



////// 4)Hoisting

// 1)

// console.log(a1)
// var a1=40  //undefined

// 2)
// console.log(b1)
// let b1="Welcome" //error

// 3)
great()
function great(){
    console.log("Congatulations")
}



////// 5)Function Types

// 1)named function
function namedfunction(){
    console.log("Named Function Example")
}
namedfunction()

// 2)anonymous function
let multiply=function(a,b){
    console.log(a*b)
}
multiply(8,5)

// 3)arrow function

let square=num3=>{
    console.log(num3*num3)
}
square(4)
console.clear()




/////6)Callback & Higher Order Function

// 1)
function processData(callback){
    callback()
}
function show1(){
    console.log("Data Processed")
}
processData(show1)

// 2)
function calculate(a,b,operation){
    console.log(operation(a,b))
}
function add(a,b){
    return(a+b)
}
function sub(a,b){
    return(a-b)
}
calculate(10,5,add)
calculate(5,3,sub)


// 3)
function task(A,B,callback1){
    console.log(A+B)
    callback1()
}
function show2(){
    console.log("Task Completed")
}
task(20,10,show2)


// 4)
function userdata0(callback3){
    let name0=prompt("Enter name")
    callback3(name0)
}
function data0(name0){
    console.log(name0)
}
userdata0(data0)

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
let [a1,b,c,d]=[10,20,30,40]
console.log(a1,b,c,d)

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