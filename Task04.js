// Section-6 Do While
// 1)
let i=1;
do{
    console.log(i);
i++
}while(i<=5)

// 2)
let a=5;
do{
    console.log(a)
a--;
}while(a>=1)
    console.clear()

// 3)
let b=3;
do{
    console.log(b)
    b=b+3;
}
while(b<=30)

// 4)
let c=1;
do{
    if(c%4==0){
        console.log(c);
    }
    c++;
}while(c<=20);

// 5)
let m=1;
do{
    console.log(m);
    m++;
}while(m<=10);
console.clear()


// Section-7  For Of

// 1)
let text="Javascript";
for(let i of text){
    console.log(i)
} 

// 2)
let fruits=["apple","banana","orange"]
for(let a of fruits){
}console.log(a)

// 3)
let A="Javascript";
let count= 0;
for(let ch of A){
    count++;
}
console.log(count)

// 4)
let word="Javascript";
for(let ch of word){
    if(ch=="a" || ch=="e" || ch=="i" || ch=="o" || ch=="u"){
        console.log(ch)
    }
}

// 5)
let numbers=[10,20,30];
let sum=0;
for(let n of numbers){
    sum=sum+n;
}console.log(sum)


// Section-8 For In(Object)
// 1)
let Student={
    name:"sathish",
    age: "22",
    department:"ECE"
};
for(let key in Student){
    console.log(Student[key])
}

// 2)
let student={
    name:"siva",
    age: "21",
    department:"IT"
};
for(let key1 in student){
    console.log(key1)
}

// 3)
let Student1={
    name:"sathish",
    age: "22",
    department:"ECE"
};
for(let key2 in Student1){
    console.log(key2+" : "+Student1[key2])
}


// Section-9 Functions
// 1)
function add(a,b){
    return a+b;
}
let x = add(5,3);
console.log(x)

// 2)
function square(num){
    return num*num;
}
let result = square(5);
// console.log(result)